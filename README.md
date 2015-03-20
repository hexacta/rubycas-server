# RubyCAS-Server

## Copyright

Portions contributed by Matt Zukowski are copyright (c) 2011 Urbacon Ltd.
Other portions are copyright of their respective authors.

## Authors

See https://github.com/rubycas/rubycas-server/graphs/contributors

## Instalación

1. Clonar el repositorio: `git clone https://github.com/hexacta/rubycas-server.git`
2. Entrar al directorio del proyecto: `cd rubycas-server`
3. Generar el archivo `config.yml` con el siguiente comando: `cp config/config.example.yml config.yml`
4. Modificar el archivo `config.yml` para autenticar contra el LDAP de Hexacta:
    1. Configurar WEBrick:
        1. Cambiar el puerto que está configurado por default (Ej.: port: 3001)
        2. Comentar la opción `ssl_cert`
    2. Configurar MySQL:
        1. Primero crear una base de datos MySQL. Un link para hacerlo fácil y rápido: [Aca](https://www.digitalocean.com/community/tutorials/a-basic-mysql-tutorial)
        2. Con los datos de esta BD completar las configuraciones. <br>
        database:<br>
        adapter: mysql<br>
        database: base_de_batos<br>
        username: root<br>
        password: password<br>
        host: localhost<br>
        reconnect: true<br>

    3. Configurar LDAP:<br>
authenticator:<br>
                 class: CASServer::Authenticators::ActiveDirectoryLDAP<br>
                  ldap:<br>
                    host: "host"<br>
                    port: port<br>
                    base: "ldap_base"<br>
    filter: (objectClass=person)<br>
    auth_user: "ldap_user"<br>
    auth_password: "ldap_user_password"<br>

    4. Configurar logs: Cambiar el log.file. Recomendado: /rubycas-server/log/casserver.log

5. Ejecutar el siguiente comando: `bundle install`
6. Ejecutar el comando para tener el server corriendo: `bundle exec rubycas-server -c config.yml`

<b> Recomendación:</b> Usar Ruby 2.1.2

## License

RubyCAS-Server is licensed for use under the terms of the MIT License.
See the LICENSE file bundled with the official RubyCAS-Server distribution for details.
