export const checkAuthentication = () => async (dispatch, getState) => {
  window.gapi.load('client:auth2', () => {
    window.gapi.client.init({
      clientId: '822533717678-4nurk1datf688kphmcm70lalesaejk5h.apps.googleusercontent.com',
      scope: 'profile email'
    }).then(() => {
      const auth = window.gapi.auth2.getAuthInstance();
      console.log(auth);
      // this.onAuthChange(this.auth.isSignedIn.get())
      // this.auth.isSignedIn.listen(this.onAuthChange);
    })
  });
}