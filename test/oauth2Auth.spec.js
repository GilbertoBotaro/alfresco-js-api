/*global describe, it, beforeEach */

var expect = require('chai').expect;
var Oauth2Mock = require('../test/mockObjects/mockAlfrescoApi').Oauth2Mock.Auth;
var Oauth2Auth = require('../src/oauth2Auth');

describe('Oauth2  test', function () {

    beforeEach(function () {
        this.hostOauth2 = 'http://myOauthUrl:30081/auth/realms/springboot';
        this.oauth2Mock = new Oauth2Mock(this.hostOauth2);
    });

    describe('With Authentication', function () {

        it('login should return the Token if is ok', function (done) {

            this.oauth2Mock.get200Response();
            this.oauth2Mock.get200Discovery();

            this.oauth2Auth = new Oauth2Auth({
                oauth2: {
                    'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                    'clientId': 'activiti',
                    'scope': 'openid',
                    'secret': '',
                    'redirectUri': '/',
                    'redirectUriLogout': '/logout'
                },
                authType: 'OAUTH'
            });

            this.oauth2Auth.login('admin', 'admin').then((data) => {
                expect(data.access_token).to.be.equal('test-token');
                done();
            }, function () {
            });

        });

        it('isLoggedIn should return true if the api is logged in', function (done) {

            this.oauth2Mock.get200Response();
            this.oauth2Mock.get200Discovery();

            this.oauth2Auth = new Oauth2Auth({
                oauth2: {
                    'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                    'clientId': 'activiti',
                    'scope': 'openid',
                    'secret': '',
                    'redirectUri': '/',
                    'redirectUriLogout': '/logout'
                },
                authType: 'OAUTH'
            });

            this.oauth2Auth.login('admin', 'admin').then((data) => {
                expect(this.oauth2Auth.isLoggedIn()).to.be.equal(true);
                done();
            }, function () {
            });
        });

        it('login password should be removed after login', function (done) {

            this.oauth2Mock.get200Response();
            this.oauth2Mock.get200Discovery();

            this.oauth2Auth = new Oauth2Auth({
                oauth2: {
                    'host': 'http://myOauthUrl:30081/auth/realms/springboot',
                    'clientId': 'activiti',
                    'scope': 'openid',
                    'secret': '',
                    'redirectUri': '/',
                    'redirectUriLogout': '/logout'
                },
                authType: 'OAUTH'
            });

            this.oauth2Auth.login('admin', 'admin').then(() => {
                expect(this.oauth2Auth.authentications.basicAuth.password).to.be.not.equal('admin');
                done();
            }, () => {
            });

        });
    });
});
