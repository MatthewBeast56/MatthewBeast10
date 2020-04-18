import Emitter from 'tiny-emitter';
import Game from '../../app/scripts/models/game.js';

describe('game', function () {

  it('should end', function () {
    const game = new Game();
    game.setPlayers({ gameType: '2P' });
    game.startGame();
    sinon.spy(Emitter.prototype, 'emit');
    try {
      game.endGame();
      expect(Emitter.prototype.emit).to.have.been.calledWith('game:end');
    } finally {
      Emitter.prototype.emit.restore();
    }
    expect(game.currentPlayer).to.be.null;
    expect(game.inProgress).to.be.false;
    expect(game.pendingChip).to.be.null;
  });

  it('should reset debug mode when ended', function () {
   const game = new Game({ debug: true });
   game.setPlayers({ gameType: '2P' });
   game.startGame();
   sinon.stub(console, 'log');
   try {
     game.placePendingChip({ column: 2 });
     expect(game.columnHistory).to.have.length(1);
     expect(game.columnHistory[0]).to.equal(2);
   } finally {
      // eslint-disable-next-line no-console
     console.log.restore();
   }
   game.endGame();
   expect(game.columnHistory).to.have.length(0);
  });

  it('should increment winner\'s score when ending', function () {
    const game = new Game();
    game.setPlayers({ gameType: '2P' });
    game.startGame();
    game.winner = game.players[0];
    expect(game.winner.score).to.equal(0);
    game.endGame();
    expect(game.winner.score).to.equal(1);
  });

});
