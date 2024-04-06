from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class UserManager(BaseUserManager):
    def _create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set.")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        return self._create_user(email, password, **extra_fields)
    

class User(AbstractBaseUser):
    email = models.CharField(max_length=250, unique=True)
    username = models.CharField(max_length=250, unique=True, null=True)  
    password = models.CharField(max_length=250)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']  

    objects = UserManager()

    def save(self, *args, **kwargs):
       
        self.username = self.email
        super().save(*args, **kwargs)
