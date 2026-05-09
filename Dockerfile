FROM php:8.2-apache

# Activar rewrite y permitir .htaccess
RUN a2enmod rewrite \
    && sed -i 's/AllowOverride None/AllowOverride All/g' /etc/apache2/apache2.conf

# Copiar proyecto
COPY . /var/www/html/

EXPOSE 80
