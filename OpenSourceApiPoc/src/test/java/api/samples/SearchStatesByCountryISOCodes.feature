Feature: SearchStatesByCountryISOCodes
Background:
	* url baseUrl

Scenario: search ISO Codes for any given country


Given path 'state/get/IND/all'
When method GET
Then status 200

Given path 'state/get/USA/all'
When method GET
Then status 200




















