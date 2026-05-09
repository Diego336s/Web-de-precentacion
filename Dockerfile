FROM php:8.2-apache

# Copiar archivos
COPY . /var/www/html/

# Habilitar mod_rewrite únicamente
RUN a2enmod rewrite

# Permisos
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80

CMD ["apache2-foreground"]