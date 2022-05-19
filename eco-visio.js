(function() {
    'use strict';

	const DISABLE_PASSWORD_SECURITY_CHECK = true; // Désactive la modale forçant à modifier son mot de passe

    const disablePasswordSecurity = () => {
        const passwordSecurityURLPattern = /.*\/confirm\/#strengthenPassword.*/;
        window.addEventListener('popstate', function (event) {
            if (window.location.href.match(passwordSecurityURLPattern)) {
				console.log(window.location.href.replace(/confirm\/#strengthenPassword.*/, ''));
             document.location.replace(window.location.href.replace(/confirm\/#strengthenPassword.*/, ''));
            }
        });
    };

    if (DISABLE_PASSWORD_SECURITY_CHECK) disablePasswordSecurity();
})();