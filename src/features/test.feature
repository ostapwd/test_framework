Feature: Perform API call

Scenario: Get comments test
    Given A new user is created
    When They perform API request to GET comments endpoint
    Then They get a correct response