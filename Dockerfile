FROM php:8.2-apache

# Desactivar TODOS los MPM posibles
RUN a2dismod mpm_event
RUN a2dismod mpm_worker

# Activar SOLO prefork
RUN a2enmod mpm_prefork

# Activar rewrite
RUN a2enmod rewrite

# Copiar proyecto
COPY . /var/www/html/

EXPOSE 80