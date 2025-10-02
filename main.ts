player.onItemInteracted(DIAMOND_SWORD, function () {
    mobs.spawn(COW, pos(11, 11, 11))
    blocks.place(GRASS, pos(1000, 500, 600))
    music.playMusic(MusicDisc.Blocks, posCamera(0, 0, 0))
    player.teleport(pos(560, 50, 200))
    agent.move(FORWARD, 500)
})
