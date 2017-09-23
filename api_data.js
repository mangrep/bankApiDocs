define({ "api": [  {    "type": "post",    "url": "/api/bank/search/likeBranchName",    "title": "Search by incomplete bank name and branch name",    "description": "<p>You have incomplete bank name and branch name and want to check if there is any match available use this api.</p>",    "group": "Bank_lookup",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "bankName",            "description": "<p>Fuzzy bank name</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "branchName",            "description": "<p>Fuzzy bank name</p>"          }        ]      },      "examples": [        {          "title": "Input",          "content": "{\n  \"bankName\": \"AnDhRa BA\",\n  \"branchName\" : \"GHAN\"\n}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\"status\":\"success\",\"data\":[{\"_id\":\"5925da7185059ea580059e15\",\"STATE\":\"TELANGANA\",\"BANK\":\"ANDHRA BANK\",\"IFSC\":\"ANDB0002958\",\"BRANCH\":\"STATION GHANPUR\",\"ADDRESS\":\"H NO 1 TO 12,STATION ROAD,STATION GHANPUR,WARANGAL DIST,506144\",\"CONTACT\":\"2551058\",\"CITY\":\"WARANGAL\",\"DISTRICT\":\"WARANGAL\",\"MICRCODE\":\"506011547\"},{\"_id\":\"5925da7185059ea580059eb0\",\"STATE\":\"ANDHRA PRADESH\",\"BANK\":\"ANDHRA BANK\",\"IFSC\":\"ANDB0002801\",\"BRANCH\":\"GHANI\",\"ADDRESS\":\"MAIN ROAD,GHANI VILLAGE,GADIVEMULA MANDAL,KURNOOL DIST,518010\",\"CONTACT\":\"9908764545\",\"CITY\":\"GADIVEMULA\",\"DISTRICT\":\"KURNOOL\",\"MICRCODE\":\"NA\"},{\"_id\":\"5925da7185059ea58005a310\",\"STATE\":\"MAHARASHTRA\",\"BANK\":\"ANDHRA BANK\",\"IFSC\":\"ANDB0001649\",\"BRANCH\":\"GHANSOLI\",\"ADDRESS\":\"SHOP-7,8,9,SURYA KIRAN,PLOT-12 &13,SEC-5,GHANSOLI N MUMBAI-400701\",\"CONTACT\":\"0\",\"CITY\":\"GHANSOLI\",\"DISTRICT\":\"GREATER MUMBAI\",\"MICRCODE\":\"400011034\"},{\"_id\":\"5925da7185059ea58005a605\",\"STATE\":\"ANDHRA PRADESH\",\"BANK\":\"ANDHRA BANK\",\"IFSC\":\"ANDB0000849\",\"BRANCH\":\"MULUG GHANPUR\",\"ADDRESS\":\"MULUGU GHANPURWARANGAL DIST,AP\",\"CONTACT\":\"0\",\"CITY\":\"WARANGAL\",\"DISTRICT\":\"WARANGAL\",\"MICRCODE\":\"506011522\"},{\"_id\":\"5925da7185059ea58005a88b\",\"STATE\":\"ANDHRA PRADESH\",\"BANK\":\"ANDHRA BANK\",\"IFSC\":\"ANDB0000169\",\"BRANCH\":\"GHANPUR\",\"ADDRESS\":\"MAIN RD., KHILLA GHANPUR, WANAPARTHY TQ.\",\"CONTACT\":\"0\",\"CITY\":\"WANAPARTHI\",\"DISTRICT\":\"MAHBUBNAGAR\",\"MICRCODE\":\"509011682\"},{\"_id\":\"5925da7185059ea58005a8a5\",\"STATE\":\"ANDHRA PRADESH\",\"BANK\":\"ANDHRA BANK\",\"IFSC\":\"ANDB0000143\",\"BRANCH\":\"GHANTASALA\",\"ADDRESS\":\"MAIN ROAD,GHANTASALA,KRISHNA DIST,AP\",\"CONTACT\":\"0\",\"CITY\":\"GHANTASALA\",\"DISTRICT\":\"KRISHNA\",\"MICRCODE\":\"520011663\"}],\"message\":null}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 200\n{\"status\": \"failed\", \"message\": \"Failure cause\"}",          "type": "json"        }      ]    },    "filename": "src/main/java/in/co/techm/controller/RestController.java",    "groupTitle": "Bank_lookup",    "name": "PostApiBankSearchLikebranchname"  },  {    "type": "get",    "url": "/api/branch/:branchName",    "title": "by branch name",    "description": "<p>If you just have branch name, use this API to get list of banks objects by matching branch name.</p>",    "name": "branchesByBranchName",    "version": "0.0.1",    "group": "Bank_lookup",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "branchName",            "description": "<p>You must use branch name provided in response of listbranches api.</p>"          }        ]      }    },    "examples": [      {        "title": "Sample",        "content": "https://api.techm.co.in/api/branch/KASHMIR",        "type": "json"      }    ],    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\"status\":\"success\",\"data\":[{\"STATE\":\"HIMACHAL PRADESH\",\"BANK\":\"UCO BANK\",\"IFSC\":\"UCBA0001539\",\"BRANCH\":\"KASHMIR\",\"ADDRESS\":\"R V & PO KASHMIRDISTT-HAMIRPUR 177006\",\"CONTACT\":\"239021\",\"CITY\":\"KASHNIUR\",\"DISTRICT\":\"HAMIRPUR\",\"MICRCODE\":\"177028054\"}],\"message\":null}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 200 OK\n{\"status\": \"failed\", \"message\": \"Failure cause\"}",          "type": "json"        }      ]    },    "filename": "src/main/java/in/co/techm/controller/RestController.java",    "groupTitle": "Bank_lookup"  },  {    "type": "get",    "url": "/api/v1/ifsc/:ifsCode",    "title": "by IFS Code",    "name": "findByIfsc",    "group": "Bank_lookup",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "ifsCode",            "description": "<p>Pass IFS Code</p>"          }        ]      }    },    "examples": [      {        "title": "Sample",        "content": "https://api.techm.co.in/api/v1/ifsc/ANDB0001154",        "type": "json"      }    ],    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\"status\":\"success\",\"data\":{\"STATE\":\"ANDHRA PRADESH\",\"BANK\":\"ANDHRA BANK\",\"IFSC\":\"ANDB0001154\",\"BRANCH\":\"SAROORNAGAR\",\"CONTACT\":\"0\",\"ADDRESS\":\"11-3-25&11-3-26 ABHITEJA HOMES, ROAD NO 11SRI VENKATESWARA COLONY, SAROOR NAGAR, HYD\",\"CITY\":\"SAROORNAGAR\",\"DISTRICT\":\"HYDERABAD URBAN\",\"MICRCODE\":\"500011075\"}}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 200 OK\n{\"status\": \"failed\", \"message\": \"Failure cause\"}",          "type": "json"        }      ]    },    "filename": "src/main/java/in/co/techm/controller/RestController.java",    "groupTitle": "Bank_lookup"  },  {    "type": "get",    "url": "/api/getbank/:bankName/:branchName",    "title": "by bank and branch name",    "description": "<p>If you have both valid bank and branch name. Use this API get the matching bank object.</p>",    "name": "getBank",    "version": "0.0.1",    "group": "Bank_lookup",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "bankName",            "description": "<p>You must use bank name provided in response of listbanks api.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "branchName",            "description": "<p>You must use branch name provided in response of listbranches api.</p>"          }        ]      }    },    "examples": [      {        "title": "Sample",        "content": "https://api.techm.co.in/api/getbank/YES%20BANK/ASSOCIATE%20COOP%20BANK%20UMARWADA",        "type": "json"      }    ],    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\"status\":\"success\",\"data\":{\"STATE\":\"state name\",\"BANK\":\"bank name\",\"IFSC\":\"ifsc code\",\"BRANCH\":\"branch name\",\"ADDRESS\":\"address\",\"CONTACT\":\"bank contact number\",\"CITY\":\"city\",\"DISTRICT\":\"district\",\"MICRCODE\":\"micrcode\"}}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 200 OK\n{\"status\": \"failed\", \"message\": \"Failure cause\"}",          "type": "json"        }      ]    },    "filename": "src/main/java/in/co/techm/controller/RestController.java",    "groupTitle": "Bank_lookup"  },  {    "type": "get",    "url": "/api/v1/micr/:micrCode",    "title": "by MICR code",    "name": "micrCode",    "version": "0.0.1",    "group": "Bank_lookup",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "micrCode",            "description": "<p>Pass MICR code</p>"          }        ]      }    },    "examples": [      {        "title": "Sample",        "content": "https://api.techm.co.in/api/v1/micr/500011075",        "type": "json"      }    ],    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\"status\":\"success\",\"data\":{\"_id\":\"5925da7185059ea58005a4ef\",\"STATE\":\"ANDHRA PRADESH\",\"BANK\":\"ANDHRA BANK\",\"IFSC\":\"ANDB0001154\",\"BRANCH\":\"SAROORNAGAR\",\"ADDRESS\":\"11-3-25&11-3-26 ABHITEJA HOMES, ROAD NO 11SRI VENKATESWARA COLONY, SAROOR NAGAR, HYD\",\"CONTACT\":\"0\",\"CITY\":\"SAROORNAGAR\",\"DISTRICT\":\"HYDERABAD URBAN\",\"MICRCODE\":\"500011075\"},\"message\":null}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 200 OK\n{\"status\": \"failed\", \"message\": \"Failure cause\"}",          "type": "json"        }      ]    },    "filename": "src/main/java/in/co/techm/controller/RestController.java",    "groupTitle": "Bank_lookup"  },  {    "type": "post",    "url": "/api/fuzzySearchBank",    "title": "Fuzzy search by bank name",    "description": "<p>Get list of banks names matching fuzzy bank name provided. Internally levenshtein distance algorithm is used.</p>",    "group": "Fuzzy_Search",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "bankName",            "description": "<p>Fuzzy bank name</p>"          }        ]      },      "examples": [        {          "title": "Input",          "content": "{\n  \"bankName\": \"stat b\"\n}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\"status\":\"success\",\"data\":[\"B N P PARIBAS\",\"HIMACHAL PRADESH STATE COOPERATIVE BANK LTD\",\"STATE BANK OF BIKANER AND JAIPUR\",\"STATE BANK OF HYDERABAD\",\"STATE BANK OF INDIA\",\"STATE BANK OF MAURITIUS LIMITED\",\"STATE BANK OF MYSORE\",\"STATE BANK OF PATIALA\",\"STATE BANK OF TRAVANCORE\",\"TELANGANA STATE COOP APEX BANK\",\"THE ANDHRA PRADESH STATE COOPERATIVE BANK LIMITED\",\"THE DELHI STATE COOPERATIVE BANK LIMITED\",\"THE GUJARAT STATE COOPERATIVE BANK LIMITED\",\"THE KARANATAKA STATE COOPERATIVE APEX BANK LIMITED\",\"THE TAMIL NADU STATE APEX COOPERATIVE BANK\",\"MAHARASHTRA STATE COOPERATIVE BANK\",\"THE WEST BENGAL STATE COOPERATIVE BANK\"],\"message\":null}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 200\n{\"status\": \"failed\", \"message\": \"Failure cause\"}",          "type": "json"        }      ]    },    "filename": "src/main/java/in/co/techm/controller/RestController.java",    "groupTitle": "Fuzzy_Search",    "name": "PostApiFuzzysearchbank"  },  {    "type": "post",    "url": "/api/fuzzySearchBranch",    "title": "Fuzzy Search by branch name",    "description": "<p>Get list of branch names matching fuzzy branch name provided. Internally levenshtein distance algorithm is used.</p>",    "name": "fuzzySearchBranch",    "version": "0.0.1",    "group": "Fuzzy_Search",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Content-Type",            "description": "<p>Pass application/json.</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "bankName",            "description": "<p>Pass bank name. Make sure bank name is valid.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "branchName",            "description": "<p>Pass fuzzy branch name</p>"          }        ]      },      "examples": [        {          "title": "Request-Example:",          "content": "{\n     \"bankName\":\"ANDHRA BANK\",\n      \"branchName\":\"GHANT\"\n}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\"status\":\"success\",\"data\":[\"NOGHANVADAR\",\"SINGHANIA COMPLEX, SHAHDOL\",\"GHANTA GHAR, HARDA\",\"GHANTAGHAR, BUDAUN\",\"SINGHANA ROAD, NARNAUL\",\"GHANAHATTI  PARHECH\",\"GHANSOLI\",\"STATION GHANPUR\",\"GHANTASALA\",\"MADHOSINGHANA\",\"PRACHI (GHANTIA)\",\"GHANGHARI\",\"MEGHANINAGAR\",\"GHANSHYAMPUR\",\"GHANTAGHAR, KATNI\",\"CHAUSARI GHANTA\",\"GHANSORE\",\"GHANSALI\",\"GHANAD\",\"GOHANA\",\"KALPA-KAMDEOBIGHA\",\"SAHIJPUR BOGHA\",\"BARBIGHA\",\"JANDUSINGHA\",\"GHAT\",\"KALMEGHA BAZAR\",\"TELESINGHA NTPC CAMPUS\",\"GHARUAN\",\"GARHANI\"],\"message\":null}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 200 OK\n{\"status\": \"failed\", \"message\": \"Failure cause\"}",          "type": "json"        }      ]    },    "filename": "src/main/java/in/co/techm/controller/RestController.java",    "groupTitle": "Fuzzy_Search"  },  {    "type": "get",    "url": "/api/listbanks",    "title": "get list of supported banks",    "description": "<p>Get list of supported banks. Use it as input to other APIs.</p>",    "name": "listAllBankName",    "group": "Supported_banks",    "version": "0.0.1",    "examples": [      {        "title": "Sample",        "content": "https://api.techm.co.in/api/listbanks",        "type": "json"      }    ],    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\"status\": \"success\", \"data\":[\"Bank A\",\"Bank B\", \"Bank C\", .............]}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 200 OK\n{\"status\": \"failed\", \"message\": \"Failure cause\"}",          "type": "json"        }      ]    },    "filename": "src/main/java/in/co/techm/controller/RestController.java",    "groupTitle": "Supported_banks"  },  {    "type": "get",    "url": "/api/listbranches/:bankName",    "title": "get list of branches",    "description": "<p>Get list of branches by bank name. Use it as input to other APIs.</p>",    "name": "listBranchesByBankName",    "version": "0.0.1",    "group": "Supported_banks",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "bankName",            "description": "<p>You must use bank name provided in response of listbanks api.</p>"          }        ]      }    },    "examples": [      {        "title": "Sample",        "content": "https://api.techm.co.in/api/listbranches/Yes%20bank",        "type": "json"      }    ],    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\"status\":\"success\",\"data\":[\"ABIDS, HYDERABAD\",\"ABU ROAD\", ....]}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 200 OK\n{\"status\": \"failed\", \"message\": \"Failure cause\"}",          "type": "json"        }      ]    },    "filename": "src/main/java/in/co/techm/controller/RestController.java",    "groupTitle": "Supported_banks"  }] });
