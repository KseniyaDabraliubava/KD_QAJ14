Feature: Rock Paper Scissors Game
  As a player
  I want to play Rock Paper Scissors against a bot
  So that I can have fun and test my luck

  Background:
    Given Rock Paper Scissors game is created

  Scenario Outline: Player plays with rock
    Given Player chooses "rock"
    When Bot chooses "<bot_move>"
    Then Result should be "<result>"

    Examples:
      | bot_move  | result |
      | scissors  | player |
      | paper     | bot    |
      | rock      | draw   |

  Scenario: Player wins with rock
    Given Player chooses "rock"
    When Bot chooses "scissors"
    Then Player should win

  Scenario: Bot wins against rock
    Given Player chooses "rock"
    When Bot chooses "paper"
    Then Bot should win

  Scenario: Draw with both choosing rock
    Given Player chooses "rock"
    When Bot chooses "rock"
    Then Game should be a draw

  Scenario Outline: Player plays with paper
    Given Player chooses "paper"
    When Bot chooses "<bot_move>"
    Then Result should be "<result>"

    Examples:
      | bot_move  | result |
      | rock      | player |
      | scissors  | bot    |
      | paper     | draw   |

  Scenario: Player wins with paper
    Given Player chooses "paper"
    When Bot chooses "rock"
    Then Player should win

  Scenario: Bot wins against paper
    Given Player chooses "paper"
    When Bot chooses "scissors"
    Then Bot should win

  Scenario: Draw with both choosing paper
    Given Player chooses "paper"
    When Bot chooses "paper"
    Then Game should be a draw

  Scenario Outline: Player plays with scissors
    Given Player chooses "scissors"
    When Bot chooses "<bot_move>"
    Then Result should be "<result>"

    Examples:
      | bot_move  | result |
      | paper     | player |
      | rock      | bot    |
      | scissors  | draw   |

  Scenario: Player wins with scissors
    Given Player chooses "scissors"
    When Bot chooses "paper"
    Then Player should win

  Scenario: Bot wins against scissors
    Given Player chooses "scissors"
    When Bot chooses "rock"
    Then Bot should win

  Scenario: Draw with both choosing scissors
    Given Player chooses "scissors"
    When Bot chooses "scissors"
    Then Game should be a draw

  Scenario Outline: All possible game outcomes
    Given Player chooses "<player_move>"
    When Bot chooses "<bot_move>"
    Then Result should be "<result>"

    Examples:
      | player_move | bot_move  | result |
      | rock        | scissors  | player |
      | rock        | paper     | bot    |
      | rock        | rock      | draw   |
      | paper       | rock      | player |
      | paper       | scissors  | bot    |
      | paper       | paper     | draw   |
      | scissors    | paper     | player |
      | scissors    | rock      | bot    |
      | scissors    | scissors  | draw   |