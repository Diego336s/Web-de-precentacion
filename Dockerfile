FROM php:8.2-apache

COPY . /var/www/html/

RUN a2dismod mpm_event || true
RUN a2dismod mpm_worker || true
RUN a2enmod mpm_prefork

RUN a2enmod rewrite

EXPOSE 80