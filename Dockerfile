FROM php:8.2-apache

# Copiar proyecto
COPY . /var/www/html/

# Habilitar mod_rewrite
RUN a2enmod rewrite

# Permisos
RUN chown -R www-data:www-data /var/www/html

# Railway usa PORT dinámico
ENV PORT=80

EXPOSE 80

CMD ["apache2-foreground"]