  
  
 CREATE DATATABASE recursosVFX; 
  
/* CREAR TABLA SOFTWARE */
  CREATE TABLE softwares(
    software_id SERIAL NOT NULL PRIMARY KEY, 
    title varchar(40) NOT NULL UNIQUE,
    link varchar(255),
    category_id int NOT NULL,
    tags text[],
    description_short varchar(255),
    description_long text,
    company varchar(40),
    price varchar(40),
    profiles text[],
    combined text[],
    related text[],
    difficulty varchar(40),
    logo text,
    img_main text,
    imgs text[],
    creator text[],
    created DEFAULT date,
    updated DEFAULT date,
    FOREIGN KEY (category) REFERENCES categories(resource_id)
  );


/* CREAR TABLA RECURSOS PRUEBA CORTA A*/
CREATE TABLE resources(
    resource_id SERIAL NOT NULL PRIMARY KEY, 
    title varchar(40) NOT NULL UNIQUE,
    link varchar(255),
	category_id int,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
  );

/* CREAR TABLA RECURSOS PRUEBA CORTA B*/
CREATE TABLE resources(
    software_id SERIAL NOT NULL PRIMARY KEY, 
    title varchar(40) NOT NULL UNIQUE,
    description_short varchar(255),
    logo varchar(255),
	category varchar(40),
  tags text[]
  );


/* CREAR TABLA CATEGORIAS */
CREATE TABLE categories(
    category_id SERIAL NOT NULL PRIMARY KEY,
    title varchar(100)
    );

CREATE TABLE tags(
    tag_id SERIAL NOT NULL PRIMARY KEY,
    title varchar(100)
    );


  CREATE TABLE roles(
	rol_id SERIAL NOT NULL PRIMARY KEY,
	rol varchar(100)
);


--Inserción Recursos de Prueba TABLA CORTA
INSERT INTO resources(title,link,category_id)
VALUES 
('Maya',
'https://www.autodesk.com/es/products/maya',
'1'
)

--Inserción Recursos de Prueba TABLA CORTA B
INSERT INTO softwares(title,description_short,logo,category,tags)
VALUES 
('Programa nuevo 01',
'descripción breve',
'ruta del logo',
'softwares',
'{"3D", "Rigging", "Animation","Cosa"}'
)

--Inserccion Recursos de Prueba
INSERT INTO resources(pelicula_id,title,link,category,tags,description_short,description_long,company,price,profiles,combined,related,difficulty,logo,img_main,imgs,creator,created,updated)
VALUES 
('Maya',
'https://www.autodesk.com/es/products/maya',
'Software',
'{"3D", "Texturas", "Modelado", "Render"}',
'Maya es un software que permite desarrollar todo el flujo de trabajo de una producción 3D: modelado, UVs, texturizado, animación, simulaciones y render.',
'Maya es un software que permite desarrollar todo el flujo de trabajo de una producción 3D: modelado, UVs, texturizado, animación, simulaciones y render. Está muy presente en la industria del cine, los efectos especiales y la animación digital. Aunque en un flujo de trabajo de alto nivel el texturizado y las simulaciones son trabajadas en softwares más especializados como Houdini, Substance (texturizado) o Marvelous (Simulación de telas). Arnold es el motor de render que suele ir de la mano de Maya al ser este también propiedad de Autodesk desde el año 2016.',
'Autodesk',
'2.245 €/año',
'{"Animador 3D", "Artista Técnico", "Modelador Hardsurface"}',
'{"Unreal", "Substance Painter", "Houdini"}',
'{"Cinema 4D", "Blender", "Houdini"}',
'Complejo',
'ruta del logo',
'ruta de la imagen principal',
'{"ruta imagen 2", "ruta imagen 3"}',
'creador 01',
'2024/11/10',
'2024/11/11')






 INSERT INTO categories(title)
  VALUES
  ('Software'), ('Hardware'), ('Documentación')




/* Array Categories */
[]


/* Array Tags */

["3D",
"2D",
"Plugin",
"Ilustración",
"Animación",
"Texturas",
"Modelado Orgánico",
"Modelado HardSurface",
"Composición",
"Programación",
"Motores de Juegos",
"Render",
"Gestión de Proyectos",
"Montaje",
"Etalonaje",
"Audio",
"Impresión 3D",
]

/* Array Tags Hardware */

["3D",
"2D",
"Plugin",
"Ilustración",
"Animación",
"Texturas",
"Modelado Orgánico",
"Modelado HardSurface",
"Composición",
"Programación",
"Motores de Juegos",
"Render",
"Gestión de Proyectos",
"Montaje",
"Etalonaje",
"Audio",
"Impresión 3D",
"Escaners 3D",
"Cámaras",
"Drones",
"Steadicam"
]







/* Seleccionar todos los recursos con la categoría "categories.title" */
SELECT resources.*, categories.title
FROM resources
INNER JOIN categories
ON resources.category_id = categories.category_id




/* Seleccionar todo de una tabla */

SELECT * FROM public.categories
ORDER BY category_id ASC 


/* Seleccionar por Nombre y Etiquetas */

SELECT * 
    FROM softwares 
    WHERE 
        LOWER(title) LIKE LOWER('%ejemp%')
        AND tags @> ARRAY['cosa']
    LIMIT $3