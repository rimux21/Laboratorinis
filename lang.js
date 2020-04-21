var lang;
var arrLang = {
    'en' : {
    			'About': 'About me',
    			'Skills': 'Skills',
    			'Experience': 'Experience',
                'Contact': 'Contact',
                'hi': 'Im Rimantas Kripas',
                'paragraph': 'Web designer',
    			'english': 'English',
                'lithuanian': 'Lithuanian',
                'age': 'Age',
                'first': 'About me',
                'email': 'Email',
                'number':'Phone',
                'key1': '20 years old',
                'second': 'My Skills',
                'html':'HTML5 Language',
                'css':'CSS Language',
                'java':'JavaScript Programming',
                'c++':'C++ Programming',
                'sql':'SQL Server',
                'exp':'Experience',
                'git':'Im Github User',
                'yt' :'Im Video Editor',
                'google':'Im Google User',
                'mic':'Im Microsoft Instructor',
                'cont':'Contact Me',
                'bilow':'Contact Me Below',
                'foter':'Website Designed By: Rimantas Kripas © 2020 Copyright',
                'user':'Name',
                'email':'Email',
                'message':'Leave your message here',
                'age1':'20 years old',
                'butn':'Languages',
    		},
    		'lt' : {
    			'About': 'Apie mane',
    			'Skills': 'Įgūdžiai',
    			'Experience': 'Patirtis',
                'Contact': 'Susisiek',
                'hi': 'Aš Rimantas Kripas',
                'paragraph': 'Interneto dizaineris',
    			'english': 'Anglų',
                'lithuanian': 'Lietuvių',
                'age': 'Amžius',
                'first': 'Apie Mane',
                'email': 'El.Paštas',
                'number': 'Tel.Nr',
                'key1':'20 Metų',
                'second':'Mano Įgūdžiai',
                'html':'HTML5 Kalba',
                'css':'CSS Kalba',
                'java':'JavaScript Programavimas',
                'c++':'C++ Programavimas',
                'sql':'SQL Serveriai',
                'exp':'Patirtis',
                'git':'Aš Github Vartotojas',
                'yt' :'Aš Video Editorius',
                'google':'Aš Google Vartotojas',
                'mic':'Aš Microsoft Instruktorius',
                'cont':'Susisiekti',
                'bilow':'Susisiekite Su Manim',
                'foter':'Svetainę sukūrė: Rimantas Kripas © 2020 Autorinės teisės',
                'user':'Vardas',
                'email':'El.Paštas',
                'message':'Palikite savo žinutę čia',
                'age1':'20 Metų',
                'butn':'Kalbos',
            }


        };
        $(function(){
             $('.dropdown-item').click(function(){
                localStorage.setItem(lang, $(this).attr('id'))
                window.location.reload()
            });

            $('.nav-link').each(function(index, element){
                $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
            });

            $('.dropdown-item').each(function(index, element){
                $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
            });

            $('.bg-danger').each(function(index, element){
                $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
            });

            $('.text-muted').each(function(index, element){
                $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
            });

            $('.display-4').each(function(index, element){
                $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
            });

            $('.ml-3').each(function(index, element){
                $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
            });

            $('.text-center').each(function(index, element){
                $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
            });

            $('.pt-3').each(function(index, element){
                $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
            });

            $('[data-translate]').each(function(index, element){
                $(this).attr('placeholder', arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
            });

            $('.my-4').each(function(index, element){
                $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
            });

            $('.f').each(function(index, element){
                $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
            });

            $('.btn').each(function(index, element){
                $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
            });

        });
        