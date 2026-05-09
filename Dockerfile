FROM php:8.2-apache

# Dejar activo un solo MPM y permitir .htaccess
RUN rm -f /etc/apache2/mods-enabled/mpm_*.load /etc/apache2/mods-enabled/mpm_*.conf \
    && a2enmod mpm_prefork rewrite \
    && sed -i 's/AllowOverride None/AllowOverride All/g' /etc/apache2/apache2.conf \
    && apache2ctl -t

# Copiar proyecto
COPY . /var/www/html/

EXPOSE 80
