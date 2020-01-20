<template>
    <div class="container">
        <div class="row">
            <h1 class="testcolor">Rummikub Rules</h1>
        </div>

        <div class="row mt-1 mb-1">
            <nav id="navbar-example2" class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">Rules</a>
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link" href="#objective">Objective of the Game</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#setup">Setup</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#sets">Sets</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#playingthegame">Playing the Game</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#manipulation">Manipulation</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#thejoker">The Joker</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#scoring">Scoring</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#strategy">Strategy</a>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="row">
            <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">

                <h3 id="objective">Object of The Game</h3>
                <p>
                    To be the first to place all tiles from the rack onto the table.
                </p>

                <h3 id="setup">Set-up</h3>
                <p>
                    Place tiles face down in centre of table and mix well. Every player picks one tile.
                    The player with the highest number begins. Play proceeds clockwise.
                    Return tiles to table and mix tiles again. Every player then takes 14 tiles
                    and arranges them on his/her rack into sets of "groups" or "streets".
                    The remaining tiles on the table are the pool.
                </p>

                <h3 id="sets">Sets</h3>
                <p>
                <ul>
                    <li>
                        A <b>"group"</b> is a set of either three or four tiles of the same number but in different
                        colours. For example: black 7, red 7, blue 7, orange 7.
                    </li>
                    <li>
                        A <b>"streets"</b> are a set of three or more consecutive (one after the other) numbers, which
                        are all of the same colour. For example: blue 3, 4, 5 and 6.
                    </li>
                </ul>
                <u>Note:</u> Number 1 is always played as the lowest number and may not follow number 13.

                <h3 id="playingthegame">Playing The Game</h3>
                <p>
                    Players must place sets, valued at least 51 points (add up the set numbers),
                    onto the table in the first move. This move is called the "initial meld". If unable
                    to do an initial meld, or player chooses to delay initial meld, a tile must be taken
                    from the pool and this concludes the player's turn.
                    During the initial meld sets on the table may not be manipulated or built upon
                    with tiles from player’s rack.
                </p>

                <h3 id="manipulation">Manipulation</h3>
                <p>
                    Manipulation is the most exciting part of playing "Rummikub". Players try to table the
                    greatest amount of tiles by rearranging or adding to sets which are already on the table.
                    Sets can be manipulated in many ways as long as at the end of each
                    round only legitimate sets remain and no loose tiles are left over. Each combination must consist of
                    at least
                    three pieces. if a player has taken pieces out of combinations and does not manage to lay down all
                    pieces next
                    to other combinations the he has to take all those pieces on is own counter holder.
                </p>

                <h3 id="thejoker">The Joker</h3>
                <p>
                    A joker can be retrieved from a set by replacing it with a tile of the same numerical value and
                    colour it represents. The tile used to replace the joker can come from the player's rack or from the
                    table.
                    In the case of a group of 3, the joker can be replaced by the tile of either of the missing colours.
                    A joker that has been replaced must be used in the player's same turn as part of a new
                    set. A set containing a joker can have tiles added to it, be split apart or have tiles removed
                    from it. The joker has a penalty value of 30 points if it remains on a player's rack at the
                    end of the game.
                </p>

                <h3 id="scoring">Scoring</h3>
                <p>
                    After a player has cleared the rack the losing players add up
                    the values of the tiles they still have on their racks. This score is totalled as a minus(negative)
                    amount. The winner of the round receives a positive score equal to the total of all the
                    losers' points. At the end of a session, each player totals his/her minus and plus scores
                    to get the total score. The player with the highest score is the overall winner.
                </p>
                <!--p>
                    In the rare event that all the tiles in the pool are used before any player goes
                    "Rummikub", the player with the lowest count on his/her rack is the winner. Each
                    loser adds up his/her total tile value and subtracts from it the winner's total.This result
                    is scored as a minus amount. This total is scored to the winner as a plus amount.
                </p-->
                <p>
                    <b>Example score table</b>
                <table class="table">
                    <thead class="thead-dark">
                    <tr>
                        <th></th>
                        <th scope="col">Player A</th>
                        <th scope="col">Player B</th>
                        <th scope="col">Player C</th>
                        <th scope="col">Player D</th>
                    </tr>
                    </thead>
                    <tr>
                        <th scope="row">Round 1</th>
                        <td>+ 24</td>
                        <td>- 5</td>
                        <td>- 16</td>
                        <td>- 3</td>
                    </tr>
                    <tr>
                        <th scope="row">Round 2</th>
                        <td>- 6</td>
                        <td>- 11</td>
                        <td>+ 22</td>
                        <td>- 5</td>
                    </tr>
                    <tr>
                        <th scope="row">Round 3</th>
                        <td>- 32</td>
                        <td>- 13</td>
                        <td>- 2</td>
                        <td>+ 47</td>
                    </tr>
                    <tr>
                        <th scope="row">Round 4</th>
                        <td>+ 31</td>
                        <td>- 2</td>
                        <td>- 5</td>
                        <td>- 12</td>
                    </tr>
                    <tr class="table-secondary">
                        <th scope="row">Total</th>
                        <td>+ 17</td>
                        <td>- 31</td>
                        <td>- 1</td>
                        <td>+ 27</td>
                    </tr>
                </table>

                <h3 id="strategy">Strategy</h3>
                <p>
                    The beginning of a round of "Rummikub" may seem slow but as the table builds up,
                    more and more manipulations are possible. In the early stages of the game it may be
                    a good idea to hold back some tiles so that other players "open up" the table and
                    provide more opportunities for manipulation.
                </p>

                <p>
                    Sometimes it is useful to hold back the fourth tile of a group or a street and lay only
                    three, so that on the next turn one can lay a tile instead of drawing from the pool.
                </p>

                <p>
                    Keeping a joker on one's rack may also be a good strategy - although one risks
                    being caught with a joker when another player goes "Rummikub".
                </p>
            </div>
        </div>
    </div>
</template>
