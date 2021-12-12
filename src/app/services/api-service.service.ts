import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  envData;

  constructor(private httpClient: HttpClient) {
    this.envData = environment;
  }

  getAllClasses(): Observable<any> {
    try {
      const headers = {
        'content-type': 'application/json',
        apikey: this.envData.apiAccessKey
      };

      const url = `${this.envData.apiConn}Subject/getclasses`;

      return this.httpClient.get(url, {headers});
    } catch (e) {
      console.log('Error', e);
    }
  }

  getAllSubjects(): Observable<any> {
    const headers = {
      'content-type': 'application/json',
      apikey: this.envData.apiAccessKey
    };

    const url = `${this.envData.apiConn}Subject/getsubjects?classid=-1`;

    return this.httpClient.get(url, {headers});
  }

  getCountriesList(): Observable<any> {
    try {
      console.log('get data of countries from API');
      const headers = {
        'content-type': 'application/json',
        apikey: this.envData.apiAccessKey
      };
      const url = `${this.envData.apiConn}Country/getall`;

      console.log('url', url);
      return this.httpClient.get(url, {headers});
    } catch (err) {
      console.log('Error while retrieving data', err);
    }
  }

  postCertificate(dataParam): Observable<any> {
    try {
      const url = `${this.envData.apiConn}Document/uploadtutorcertificate`;
      const formData = new FormData();
      formData.append('apikey', this.envData.apiAccessKey);
      formData.append('userguid', localStorage.getItem('regUserGuid'));
      formData.append('certifcatefile', dataParam.document);
      formData.append('classid', dataParam.classInfo.id);
      formData.append('subjectid', dataParam.subjectInfo.id);

      return this.httpClient.post(url, formData);
    } catch (e) {
      console.log('Error', e);
    }
  }

  postFile(dataParam): Observable<any> {
    try {
      const url = `${this.envData.apiConn}Document/uploadeducationaldocument`;
      const formData = new FormData();
      formData.append('apikey', this.envData.apiAccessKey);
      formData.append('userguid', localStorage.getItem('regUserGuid'));
      formData.append('institutetype', dataParam.institute.name);
      formData.append('passingyear', dataParam.passYear);
      formData.append('documentfile', dataParam.certificateInfo);

      return this.httpClient.post(url, formData);
    } catch (e) {
      console.log('Error', e);
    }
  }

  fnAddEducationalInfo(instituteData: any[]): any {
    try {
      const educationInfo = [];
      instituteData.forEach((rec: any) => {
        educationInfo.push({
          instituetype: rec.institute.value,
          institutename: rec.orgName,
          passingyear: Number(rec.passYear),
          grade: Number(rec.grade),
          percentage: Number(rec.percentage),
          documentpath: rec.documentPath
        });
      });

      const url = 'SignUp/tutor/educationinfo';
      const body = {
        apikey: this.envData.apiAccessKey,
        userguid: localStorage.getItem('regUserGuid'),
        educationinformation: educationInfo
      };

      return this.generateHttpRequest(url, body);
    } catch (e) {
      console.log('Error while saving tutor location info', e);

      return false;
    }
  }

  fnAddSubjectInfo(subjectsData: any[]): any {
    try {
      const subjectInfo = [];
      subjectsData.forEach((sub: any) => {
        subjectInfo.push({
          classid: sub.classInfo.id,
          subjectid: sub.subjectInfo.id,
          experience: sub.experience,
          subjectfee: sub.subjectfee,
          documentpath: sub.documentpath,
          timefrom: sub.timefrom,
          timeto: sub.timeto
        });
      });

      const url = 'SignUp/tutor/subjectinfo';
      const body = {
        apikey: this.envData.apiAccessKey,
        userguid: localStorage.getItem('regUserGuid'),
        subjectinformation: subjectInfo
      };

      return this.generateHttpRequest(url, body);
    } catch (e) {
      console.log('Error while saving subjects', e);
    }
  }

  generateHttpRequest(urlParam: string, body: any): any {
    try {
      const headers = {'content-type': 'application/json'};
      const url = `${this.envData.apiConn}${urlParam}`;

      return this.httpClient.post(url, body, {headers});
    } catch (e) {
      console.log('error', e);

      return false;
    }
  }

  fnLoginUser(formValue: any, isAdminLogin, isTutor): any {
    try {
      let url = '';

      // tslint:disable-next-line:prefer-conditional-expression
      if (!isAdminLogin) {
        url = isTutor ? 'SignIn/tutor' : 'SignIn/student';
      } else {
        url = 'SignIn/tutor';
      }

      const body = {
        apikey: this.envData.apiAccessKey,
        email: formValue.loginEmail,
        password: formValue.loginPassword
      };

      return this.generateHttpRequest(url, body);
    } catch (e) {
      console.log('Error while attempting to login', e);

      return false;
    }
  }

  fnRegisterUser(formData: any, isTutor: boolean): any {
    try {
      console.log('attempting to save basic info');
      const url = isTutor ? 'SignUp/tutor/basicinfo' : '/SignUp/student/basicinfo';
      const body = {
        apikey: this.envData.apiAccessKey,
        email: formData.userEmail,
        password: formData.userPassword,
        firstname: formData.firstName,
        lastname: formData.lastName,
        mobile: `${formData.countryCode}${formData.phoneNumber}`
      };

      return this.generateHttpRequest(url, body);
    } catch (e) {
      console.log('Error while registering user', e);

      return false;
    }
  }

  fnSaveTutorLocationInfo(formData: any): any {
    try {
      const url = 'SignUp/tutor/addtutoringinfo';
      const body = {
        apikey: this.envData.apiAccessKey,
        userguid: localStorage.getItem('regUserGuid'),
        tutoringmode: formData.mode,
        tutortype: formData.type,
        country: formData.country,
        address: formData.address,
        latitude: formData.latitude,
        longitude: formData.longitude
      };

      return this.generateHttpRequest(url, body);
    } catch (e) {
      console.log('Error while saving tutor location info');

      return false;
    }
  }
}
