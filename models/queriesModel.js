
const softwares = {
    getSoftwares: `
        SELECT * 
        FROM softwares 
        LIMIT 10
    `,
    getSoftwareById: `
        SELECT * 
        FROM softwares 
        WHERE software_id = $1;
    `,

    /*Cada "$" indica los campos de entrada,
    "::text" indica que el parametro de entrada será tipo texto,
    "IS NULL" lo define como nulo,
    "OR" si no es nulo comprobamos si "$1" coincide con parte de algún title,
    "AND" también tiene en cuenta,
    "::text[]" indica que el parametro de entrada será un array de tipo texto,
     si $2 es nulo o hay coincidencia con los tags que trae en el array,
     "LIMIT" nos dara el numero de resultados que va a devolver definido en un número entero según "::int"  */

    getSoftwareBySearch: `
        SELECT * 
        FROM softwares 
        WHERE 
            ($1::text IS NULL OR LOWER(title) LIKE LOWER('%' || $1 || '%'))
        AND
            ($2::text[] IS NULL OR tags @> $2::text[])
        LIMIT $3::int
    `,
    createSoftware: `
        INSERT INTO softwares(title,description_short,logo,category,tags)
        VALUES ($1,$2,$3,$4,$5)
        RETURNING *
    `
}



module.exports = {
    softwares
};


/* SELECT * 
        FROM softwares 
        WHERE 
        ($1 IS NULL OR LOWER(title) LIKE LOWER('%' || $1 || '%'))
        AND
        ($2 IS NULL OR tags @> $2)
        LIMIT $3 */


/* getSoftwares:`
        SELECT * 
        FROM softwares 
        LIMIT 10
    `, */