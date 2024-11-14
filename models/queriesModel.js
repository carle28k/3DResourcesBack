
const softwares ={
    getSoftwares:`
        SELECT * 
        FROM softwares 
        LIMIT 10
    `,
    createSoftware:`
        INSERT INTO softwares(title,description_short,logo,category,tags)
        VALUES ($1,$2,$3,$4,$5)
        RETURNING *
    `
}



module.exports = {
    softwares
};