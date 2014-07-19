import os

import dj_database_url


BASE_DIR = os.path.dirname(os.path.dirname(__file__))

SECRET_KEY = '-@y4mtyhs=i-uc7q9b==ur(zhs%gu628wtku%q8d8$-vp1qbza'
DEBUG = bool(os.environ.get('DEBUG', False))
TEMPLATE_DEBUG = bool(os.environ.get('TEMPLATE_DEBUG', False))

DATABASES = {'default': dj_database_url.config(default='postgres://localhost/evas_api')}

AUTH_USER_MODEL = 'users.User'
ALLOWED_HOSTS = []
STATIC_URL = '/static/'
ROOT_URLCONF = 'evas_api.urls'
WSGI_APPLICATION = 'evas_api.wsgi.application'

INSTALLED_APPS = (
    # local
    'users',

    # third party apps
    'rest_framework',
    'south',
    'user_management.api',

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    )
}

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True
