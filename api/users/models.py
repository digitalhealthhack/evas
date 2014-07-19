from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from user_management.models.mixins import ActiveUserMixin


class User(ActiveUserMixin, PermissionsMixin, AbstractBaseUser):
    pass
