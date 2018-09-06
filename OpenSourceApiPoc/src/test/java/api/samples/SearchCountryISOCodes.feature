Feature: SearchCountriesISOCodes
Background:
	* url baseUrl

Scenario: search ISO Codes for any given country


Given path 'country/get/all'
When method GET
Then status 200





















