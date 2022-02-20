
//creo un nuevo jugador , bado es 1 barco, 2 submarino

function crearJugador(id_usuario,id_partida,bando) {
    return new Promise((resolve, reject) => {
      let sql = "insert into jugador (id_partida,bando,id_usuario) values (?,?,?)    ";
      pool.query(sql, [id_partida,bando,id_usuario] , (err, result) => {
        if (err) {
          throw err;
        }
        console.log(result.insertID);
        //hay que ver con que verficar la insesion porque esta retornando undefined auqnque si inserta el user
        if (result.insertID > 0) {
          resolve(true);
        } else {
          reject(false);
        }
      });
    });
  }
// obtener id de jugador
function obtengoJugador(id_usuario,id_Partida) {
  return new Promise((resolve, reject) => {
    let sql = "SELECT id_jugador FROM jugador where id_usuario = ? and id_partida = ?";
    pool.query(sql, [id_usuario,id_Partida], (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result[0].id_jugador);
      if (result[0].usuario.id_jugador > 0) {
        resolve(result[0].id_jugador);
      } else {
        reject(false);
      }
    });
  });
}

//crear Submarino
function crearSubmarino(id_jugador) {
  return new Promise((resolve, reject) => {
    let sql = "insert into submarino (vida,profundidad,coordenadaX,coordenadaY,id_jugador) values (3,1,0,0,?)    ";
    pool.query(sql, id_jugador , (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result.insertID);
      //hay que ver con que verficar la insesion porque esta retornando undefined auqnque si inserta el user
      if (result.insertID > 0) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  });
}


//crear Destructor
function crearDestructor(id_jugador) {
  return new Promise((resolve, reject) => {
    let sql = "insert into destructor (vida,coordenadaX,coordenadaY,id_jugador) values (3,0,0,?)    ";
    pool.query(sql, id_jugador , (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result.insertID);
      //hay que ver con que verficar la insesion porque esta retornando undefined auqnque si inserta el user
      if (result.insertID > 0) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  });
}