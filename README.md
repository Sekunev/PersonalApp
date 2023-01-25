# Full Stack Project Personal App- Backend

### Visualization of the Website

![image](https://github.com/Sekunev/PersonalApp/blob/main/frontend/src/assets/AnimationProject.gif)

# Backend

```
# KURULUM KOMUTLARI
   1 py -m venv env
   2 .\env\Scripts\activate
   3 pip install djangorestframework
   5 django-admin startproject main .
   6 pip install python-decouple
   7 py manage.py migrate
   8 py manage.py createsuperuser
   9 py manage.py startapp tutorial
```

## How To Use Repo

<!-- This is an example, please update according to your application -->

To clone and run this application, you'll need [Git](https://git-scm.com)

```Python

# Clone this repository
$ git clone https://github.com/your-user-name/your-project-name

# Install dependencies
    $ cd api
    $ python -m venv env
    > env/Scripts/activate (for win OS)
    > source env/Scripts/activate(for bash)
    $ source env/bin/activate (for macOs/linux OS)
    $ pip install -r requirements.txt

# Edit .backend.env to .env

# Add SECRET_KEY in .env file
# migrate
    $ python manage.py migrate
# Run the app
    $ python manage.py runserver
```

<!-- <li>Frontend kısmını apimize bağlayabilmek için cors-headers paketini kullanacağız</li>
<a href="https://github.com/adamchainz/django-cors-headers">Cors Headers paketi için</a> -->

# Frontend

# API Base URLs

## http://127.0.0.1:8000/

### API ENDPOINTS

- POST `users/register/` register
- POST `users/auth/login/` login
- POST `users/auth/logout/` logout
- GET `/api/` get all Departments And Staff
- GET `/api/department/:name` get Personal In Department

## How To Use Repo

<!-- This is an example, please update according to your application -->

To clone and run this application, you'll need [Git](https://git-scm.com)

```JavaScript

// Clone this repository
$ git clone https://github.com/your-user-name/your-project-name

// Install dependencies
    $ cd client
    $ npm or yarn install
// Run the app
    $ npm or yarn start
```
