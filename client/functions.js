//FUNCIONES GAME SCENE:
function addPlayer(self, playerInfo) {
  self.barco = self.physics.add
    .image(playerInfo.x, playerInfo.y, "barco")
    .setOrigin(0.5, 0.5)
    .setDisplaySize(50, 50);

  ship.alive = true;
  ship.health = 3;
  self.barco.setCollideWorldBounds(true);
  self.barco.setTint(playerInfo.color);
  self.barco.setDrag(1000);
}

function addOtherPlayers(self, playerInfo) {
  const otherPlayer = self.physics.add
    .image(playerInfo.x, playerInfo.y, "submarino")
    .setOrigin(0.5, 0.5)
    .setDisplaySize(50, 50)
    .setRotation(playerInfo.rotation);

  otherPlayer.playerId = playerInfo.playerId;
  otherPlayer.health = playerInfo.health;
  otherPlayer.alive = true;
  otherPlayer.setTint(playerInfo.color);
  self.otherPlayers.add(otherPlayer);
}
