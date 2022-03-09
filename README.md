# fardev-portfolio

Este proyecto consiste en un portfolio, la idea es que a futuro, cualquier persona que necesite un portfolio de una manera rapida y sencilla pueda crearlo sin problemas utilizando esta app.

El proyecto cuenta con frontend y backend, todo integrado en un repositorio utilizando Next.js, cuenta con un listado de datos del usuario, proyectos, y tecnologias en las que tiene conocimiento el mismo. Todos estos datos los obtiene de una DB que esta alojada en Heroku donde nuestra aplicación se comunica a través de Prisma.

Además cada proyecto tiene mas información del mismo como fecha de inicio, fecha de finalización, descripcion y la posibilidad de incluir imagenes o videos de cada proyecto.

Todos los datos se cargan usando Static Site Generation (funcionalidad de Next.js). Lo que permite que nuestra página sea muy rápida, ya que los datos se van a cargar cada vez que generemos una build nueva y no cada vez que alguien entre a nuestra aplicación o refresque la pagina. Esto decidí que fuera así ya que no vamos a estar constantemente modificando nuestra base de datos. Pero en el caso de que lo necesitaramos podríamos optar por Server Side Rendering o Client Side Rendering.

Este es un proyecto que hice con mucho cariño y del cual me encuentro muy orgulloso, ya que en el proceso tuve que aprender mas sobre Next.js y aprender de 0 Prisma, lo cual fue un reto bastante divertido.
