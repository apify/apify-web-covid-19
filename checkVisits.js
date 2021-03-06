const data = [
    {
        title: 'World',
        description:
            'Aggregates data from all the Apify coronavirus public actors and unifies them in a one overview dataset.',
        dataSource: 'https://apify.com/store?search=coronavirus',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        actorPage: '/petrpatek/covid-19-aggregator'
    },
    {
        title: 'Algeria',
        description: 'Gets the actual number of examined and infected people.',
        dataSource: 'http://covid19.sante.gov.dz/carte',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/pp4Wo2slUJ78ZnaAi/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/hi0DJXpcyzDwtg2Fm/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/onidivo/covid-dz'
    },
    {
        title: 'Austria',
        description: 'Gets the actual number of examined and infected people.',
        dataSource:
            'https://www.sozialministerium.at/Informationen-zum-Coronavirus/Neuartiges-Coronavirus-(2019-nCov).html',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/RJtyHLXtCepb4aYxB/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/EFWZ2Q5JAtC6QDSwV/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/petrpatek/covid-austria'
    },
    {
        title: 'Azerbaijan',
        description:
            'Gets an actual number of infected, recovered, deceased and tested people.',
        dataSource:
            'https://koronavirusinfo.az/az/page/statistika/azerbaycanda-cari-veziyyet',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/ThmCW2NVnrLa0tVp5/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/JtJHjnBtnIeKYpFi0/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/lukass/covid-az'
    },
    {
        title: 'Bahrain',
        description:
            'Gets the actual number of tested, infected and recovered people.',
        dataSource: 'https://www.moh.gov.bh/COVID19',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/c7Bc6QnnwaPLOMv3J/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/eHhCNFErvfnC42mEc/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/tugkan/covid-bh'
    },
    {
        title: 'Belgium',
        description: 'Get the actual statistics.',
        dataSource: 'https://epistat.wiv-isp.be/covid',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/apVM8aZ8hKZFvnKm7/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/DD9jrAixr0QMvQIE3/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/onidivo/covid-be'
    },
    {
        title: 'Brazil',
        description:
            'Gets the actual number of infected people and deaths per region by COVID-19 in Brazil.',
        dataSource: 'https://covid.saude.gov.br/',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true',
            frequency: '30 mins'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/3S2T1ZBxB9zhRJTBB/items?format=json&clean=1',
            frequency: '30 mins'
        },
        actorPage: '/pocesar/covid-brazil'
    },
    {
        title: 'Bulgaria',
        description: 'Gets the actual number of examined and infected people.',
        dataSource: 'https://coronavirus.bg/bg/',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/np4eYah8M5uQtj0Su/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/OicoAbu38M2cGAcDl/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/zuzka/covid-bg'
    },
    {
        title: 'Canada',
        description: 'Gets the actual number of examined and infected people',
        dataSource:
            'https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/fabbocwKrtxSDf96h/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/ji95MgtBVgGJF7XcP/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/lukass/covid-cad'
    },
    {
        title: 'China',
        description:
            'Actor gets the actual number of current confirmed, confirmed, suspected, cured and deceased people by COVID-19 in China.',
        dataSource:
            'https://github.com/BlankerL/DXY-COVID-19-Data/blob/master/json/DXYOverall.json',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/x4iHxk7TVGI7UxFv6/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/LQHrXhGe0EhnCFeei/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/katerinahronik/covid-china'
    },
    {
        title: 'Croatia',
        description:
            'Actor gets the actual number of infected, recovered and deceased people by COVID-19 in Croatia.',
        dataSource: 'https://www.koronavirus.hr/en',
        latestApi: {
            url:
                ' https://api.apify.com/v2/key-value-stores/ealAQXP81dedhLWay/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/dQxN0GCqxJ1MhgLR4/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/zuzka/covid-hr'
    },
    {
        title: 'Czech Republic',
        description: 'Gets the actual number of examined and infected people.',
        dataSource: 'https://onemocneni-aktualne.mzcr.cz/covid-19',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/K373S4uCFR9W1K8ei/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/XQWw0I5IUaUPQdc9k/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/petrpatek/covid-cz'
    },
    {
        title: 'Denmark',
        description:
            'Gets the actual number of tested, infected and deceased people.',
        dataSource: 'https://www.ssi.dk/aktuelt/sygdomsudbrud/coronavirus',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/EAlpwScH29Qa5m60g/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/Ugq8cNqnhUSjfJeHr/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/tugkan/covid-dk'
    },
    {
        title: 'Estonia',
        description:
            'Actor gets the actual number of infected and deceased people.',
        dataSource: 'https://www.terviseamet.ee/en/covid19',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/AZUhwS51lBBg26wSG/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/Ix8h3SN2Ngyukf7yM/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/lukass/covid-est'
    },
    {
        title: 'Finland',
        description: 'Gets the actual number of Coronavirus cases and deaths.',
        dataSource:
            'https://thl.fi/fi/web/infektiotaudit-ja-rokotukset/ajankohtaista/ajankohtaista-koronaviruksesta-covid-19/tilannekatsaus-koronaviruksesta',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/jEFt5tgCTMfjJpLD3/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/BDEAOLx0DzEW91s5L/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/dtrungtin/covid-fi'
    },
    {
        title: 'France',
        description: 'Gets the actual number of examined and infected people.',
        dataSource: 'https://www.santepubliquefrance.fr/',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/ufVgKLP8ljtn3ufaU/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/QBiS7pd57KVmFfgZM/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/drobnikj/covid-stats-france'
    },
    {
        title: 'Germany',
        description:
            'Actor gets the actual number of infected and deceased people.',
        dataSource:
            'https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Fallzahlen.html',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/OHrZyNo9BzT6xKMRD/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/dcm4uXhiGIjVdJAzS/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/lukass/covid-ger'
    },
    {
        title: 'Honduras',
        description:
            'Gets the actual number of infected, recovered and deceased people also in regions.',
        dataSource: 'https://covid19honduras.org/',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/b11FFW9RA1B3gIMyg/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/VDtCgFny8WSfPStct/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/zuzka/covid-hn'
    },
    {
        title: 'Hungary',
        description:
            'Gets the actual number of infected, recovered, quarantined, tested and deceased people.',
        dataSource: 'https://koronavirus.gov.hu/',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/RGEUeKe60NjU16Edo/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/Gm6qjTgGqxkEZTkuJ/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/tugkan/covid-hu'
    },
    {
        title: 'India',
        description: 'Gets the actual number of examined and infected people.',
        dataSource: 'https://www.mohfw.gov.in/',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                ' https://api.apify.com/v2/datasets/58a4VXwBBF0HtxuQa/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/zuzka/covid-in'
    },
    {
        title: 'Iran',
        description: 'Gets the actual number of examined and infected people.',
        dataSource: 'https://corona.ihio.gov.ir/',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/XV4DWf1ctkSPA8H99/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/PJEXhmQM0hkN8K3BK/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/onidivo/covid-ir'
    },
    {
        title: 'Italy',
        description: 'Gets the actual number of examined and infected people.',
        dataSource:
            'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/UFpnR8mukiu0TSrb4/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/CUdKmb25Z3HjkoDiN/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/cyberfly/covid-it'
    },
    {
        title: 'Japan',
        description: 'Gets the actual number of examined and infected people',
        dataSource: 'https://www3.nhk.or.jp/news/special/coronavirus/',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/YbboJrL3cgVfkV1am/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/ugfJOQkPhQ0fvLYzN/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/lukass/covid-jap'
    },
    {
        title: 'Kosovo',
        description:
            'Gets the actual number of coronavirus identified cases, recovered and deceased people.',
        dataSource: 'https://kosova.health/en/',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/C10heVVVE8yBd1YvF/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/ruoBcTzhMpN6SaeS2/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/katerinahronik/covid-kosovo'
    },
    {
        title: 'Lithuania',
        description: 'Gets the actual number of tested/confirmed cases.',
        dataSource: 'http://sam.lrv.lt/lt/naujienos/koronavirusas',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/xhGDb8VTqjtm1AQL6/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/1XdITM6u7PbhUrlmK/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/dtrungtin/covid-lt'
    },
    {
        title: 'Luxembourg',
        description: 'Gets the actual number of infected and deceased people.',
        dataSource:
            'https://gouvernement.lu/fr/dossiers.gouv_msan+fr+dossiers+2020+corona-virus.html#bloub-0',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/RVkUl1Y7FZn3Y410K/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/oZH6thpQSdIyo3ky2/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/tugkan/covid-lu'
    },
    {
        title: 'Malaysia',
        description: 'Gets the actual number of examined and infected people.',
        dataSource:
            'http://www.moh.gov.my/index.php/pages/view/2019-ncov-wuhan',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/6t65lJVfs3d8s6aKc/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/7Fdb90FMDLZir2ROo/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/zuzka/covid-my'
    },
    {
        title: 'Mexico',
        description:
            'Gets the number of infected people and deaths by COVID-19 in Mexico per state',
        dataSource: 'https://coronavirus.gob.mx/datos/',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/vpfkeiYLXPIDIea2T/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/4efvuMEdxdQPCreW7/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/puorc/mexico-covid19'
    },
    {
        title: 'Netherlands',
        description: 'Gets the actual number of examined and infected people',
        dataSource: 'https://www.rivm.nl/actuele-informatie-over-coronavirus',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/vqnEUe7VtKNMqGqFF/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/jr5ogVGnyfMZJwpnB/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/lukass/covid-nl'
    },
    {
        title: 'Nigeria',
        description:
            'Gets the actual number of infected people and deaths per region by COVID-19 in Nigeria.',
        dataSource: 'https://covid19.ncdc.gov.ng/',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/Eb694wt67UxjdSGbc/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/ccY329O0ng68poTiX/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/zuzka/covid-ng'
    },
    {
        title: 'Norway',
        description: 'Gets the actual number of infected people.',
        dataSource:
            'https://www.fhi.no/en/id/infectious-diseases/coronavirus/daily-reports/daily-reports-COVID19/',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/3qlmMu1XN2ZLoVIQt/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/6tpTe4Z2TBePRWYti/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/tugkan/covid-no'
    },
    {
        title: 'Pakistan',
        description: 'Gets the actual number of affected people.',
        dataSource: 'http://covid.gov.pk',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/QhfG8Kj6tVYMgud6R/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/9eUGCilmJ8HDf60mL/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/cyberfly/covid-pk'
    },
    {
        title: 'Palestine',
        description: 'Gets the actual number of affected people.',
        dataSource: 'http://site.moh.ps',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/SbribCOVf2wgR868y/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/BKpHLQrJPmgXE51tf/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/onidivo/covid-ps'
    },
    {
        title: 'Philippines',
        description: 'Gets the actual number of tested and infected people.',
        dataSource: 'https://ncovtracker.doh.gov.ph/',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/lFItbkoNDXKeSWBBA/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                ' https://api.apify.com/v2/datasets/sFSef5gfYg3soj8mb/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: 'katerinahronik/covid-philippines'
    },
    {
        title: 'Poland',
        description: 'Gets the actual number of examined and infected people.',
        dataSource:
            'https://www.gov.pl/web/koronawirus/wykaz-zarazen-koronawirusem-sars-cov-2',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/3Po6TV7wTht4vIEid/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/L3VCmhMeX0KUQeJto/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/vaclavrut/covid-pl'
    },
    {
        title: 'Portugal',
        description: 'Get the actual statistics.',
        dataSource:
            'https://covid19.min-saude.pt/ponto-de-situacao-atual-em-portugal/',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/BXGEYTTUQzYBboEQK/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/f1Qd4cMBzV1E0oRNc/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/onidivo/covid-pt'
    },
    {
        title: 'Romania',
        description:
            'Gets the actual number of infected people, deaths, recovered and tests in Romania.',
        dataSource: 'https://stirioficiale.ro/informatii',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/KUlj8EGfDGHiB0gU1/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/n1XtXTelVG5dJhDhy/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/vanadragos/covid-19-romania'
    },
    {
        title: 'Russia',
        description:
            'Gets the actual number of infected people, deaths, recovered and tests in Russia.',
        dataSource: 'https://www.rosminzdrav.ru/ministry/covid19',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/1brJ0NLbQaJKPTWMO/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/5JO5GL1h8Qv1CnG0m/items?format=json',
            frequency: 'hour'
        },
        actorPage: '/krakorj/covid-russia'
    },
    {
        title: 'Saudi Arabia',
        description:
            'Gets the actual number of infected, recovered and deceased people.',
        dataSource: 'https://covid19.moh.gov.sa/',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/40xwYCZ57p5OkyBIJ/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/OeaEEGdhvUSkXRrWU/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/katerinahronik/covid-sa'
    },
    {
        title: 'Serbia',
        description:
            'Gets the actual number of infected, recovered and deceased people.',
        dataSource: 'https://covid19.rs/homepage-english/',
        latestApi: {
            url:
                ' https://api.apify.com/v2/key-value-stores/aHENGKUPUhKlX97aL/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/X00EUFYFa9dsIdD8a/items?format=json',
            frequency: 'hour'
        },
        actorPage: '/krakorj/covid-serbia'
    },
    {
        title: 'Singapore',
        description:
            'Gets the actual number of infected, recovered and deceased people.',
        dataSource: 'https://www.moh.gov.sg/covid-19',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/yaPbKe9e5Et61bl7W/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/suHgi59tSfu02VsRO/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/tugkan/covid-sg'
    },
    {
        title: 'Slovakia',
        description:
            'Gets the actual number of examined and infected people by COVID-19.',
        dataSource:
            'https://experience.arcgis.com/experience/3430195d620344c38e81d307c252c14f/',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/GlTLAdXAuOz6bLAIO/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/oUWi8ci7F2R9V5ZFy/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/davidrychly/covid-sk-3'
    },
    {
        title: 'Slovenia',
        description: 'Gets the actual number of confirmed cases.',
        dataSource:
            'https://www.gov.si/en/topics/coronavirus-disease-covid-19/',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/603AyvQ8QjyqmnZx6/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/H6HKZRQr8I81bClnb/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/dtrungtin/covid-si'
    },
    {
        title: 'South Korea',
        description: 'Get the actual statistics.',
        dataSource: 'http://ncov.mohw.go.kr/en',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/TMFbhs7qtXpGpeaeP/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/Lc0Hoa8MgAbscJA4w/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/onidivo/covid-kr'
    },
    {
        title: 'Spain',
        description: 'Gets the actual number of examined and infected people.',
        dataSource:
            'https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov-China/situacionActual.htm',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/lluBbYoQVN65R3BGO/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/hxwow9BB75z8RV3JT/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/zuzka/covid-es'
    },
    {
        title: 'Sweden',
        description:
            'Gets the actual number of infected, recovered and deceased people.',
        dataSource:
            'https://experience.arcgis.com/experience/09f821667ce64bf7be6f9f87457ed9aa',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/8mRFdwyukavRNCr42/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/Nq3XwHX262iDwsFJS/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/tugkan/covid-se'
    },
    {
        title: 'Switzerland',
        description:
            'Gets the actual number of tested cases, the number of confirmed cases and the number of deaths.',
        dataSource:
            'https://www.bag.admin.ch/bag/en/home/krankheiten/ausbrueche-epidemien-pandemien/aktuelle-ausbrueche-epidemien/novel-cov/situation-schweiz-und-international.html',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/lDegAca820XgvjE0C/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/73pVXuygDYAtIMOhI/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/dtrungtin/covid-ch'
    },
    {
        title: 'Turkey',
        description:
            'Gets the actual number of infected, tested, recovered and deceased people.',
        dataSource: 'https://covid19.saglik.gov.tr/',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/LYeOfHQwsv7FsfdGV/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/tugkan/covid-tr'
    },
    {
        title: 'United Kingdom',
        description:
            'Gets the statistics of the actual number of infected, daily confirmed, recovered and deceased people by COVID-19',
        dataSource:
            'https://www.gov.uk/government/publications/covid-19-track-coronavirus-cases',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/KWLojgM5r1JmMW4b4/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/K1mXdufnpvr53AFk6/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/katerinahronik/covid-uk'
    },
    {
        title: 'United States',
        description:
            'Gets the actual number of examined and infected people by COVID-19.',
        dataSource:
            'https://www.cdc.gov/coronavirus/2019-ncov/cases-in-us.html',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/moxA3Q0aZh5LosewB/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/FIbyK6uHUntt2kNy3/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/petrpatek/covid-usa-cdc'
    },
    {
        title: 'Vietnam',
        description: 'Gets the actual number of Coronavirus cases and deaths.',
        dataSource: 'https://ncov.moh.gov.vn/',
        latestApi: {
            url:
                'https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true',
            frequency: 'hour'
        },
        historyApi: {
            url:
                'https://api.apify.com/v2/datasets/RnzK2Aea1RlgBcauw/items?format=json&clean=1',
            frequency: 'hour'
        },
        actorPage: '/dtrungtin/covid-vi'
    }
]

const kvs = {
    lFItbkoNDXKeSWBBA: 47,
    '28ljlt47S5XEd1qIi': 7,
    xhGDb8VTqjtm1AQL6: 2,
    SmuuI0oebnTWjRTUh: 606,
    toDWvRj1JpTXiM8FF: 48,
    '3Po6TV7wTht4vIEid': 12,
    EaCBL1JNntjR3EakU: 4,
    GlTLAdXAuOz6bLAIO: 76,
    tVaYRsPHLjNdNBu7S: 16,
    EAlpwScH29Qa5m60g: 6,
    jEFt5tgCTMfjJpLD3: 1,
    SbribCOVf2wgR868y: 1,
    fabbocwKrtxSDf96h: 5,
    '1brJ0NLbQaJKPTWMO': 6,
    KWLojgM5r1JmMW4b4: 21,
    TMFbhs7qtXpGpeaeP: 2,
    TyToNta7jGKkpszMZ: 6,
    moxA3Q0aZh5LosewB: 7,
    QhfG8Kj6tVYMgud6R: 5,
    '3qlmMu1XN2ZLoVIQt': 7,
    K373S4uCFR9W1K8ei: 22,
    pp4Wo2slUJ78ZnaAi: 2,
    RJtyHLXtCepb4aYxB: 4,
    '8mRFdwyukavRNCr42': 5,
    OHrZyNo9BzT6xKMRD: 7,
    lluBbYoQVN65R3BGO: 5,
    vpfkeiYLXPIDIea2T: 2,
    vqnEUe7VtKNMqGqFF: 4,
    XV4DWf1ctkSPA8H99: 1,
    np4eYah8M5uQtj0Su: 1,
    c7Bc6QnnwaPLOMv3J: 1,
    '6t65lJVfs3d8s6aKc': 2,
    '603AyvQ8QjyqmnZx6': 2,
    lDegAca820XgvjE0C: 2,
    aHENGKUPUhKlX97aL: 1,
    RGEUeKe60NjU16Edo: 3,
    BXGEYTTUQzYBboEQK: 1,
    UFpnR8mukiu0TSrb4: 1,
    YbboJrL3cgVfkV1am: 1,
    yaPbKe9e5Et61bl7W: 1,
    ufVgKLP8ljtn3ufaU: 1
}

const datasets = {
    '58a4VXwBBF0HtxuQa': 1349,
    EFWZ2Q5JAtC6QDSwV: 3,
    oZH6thpQSdIyo3ky2: 2,
    Nq3XwHX262iDwsFJS: 6,
    L3VCmhMeX0KUQeJto: 13,
    n1XtXTelVG5dJhDhy: 1,
    K1mXdufnpvr53AFk6: 46,
    OicoAbu38M2cGAcDl: 2,
    '7Fdb90FMDLZir2ROo': 14,
    '6tpTe4Z2TBePRWYti': 1,
    BDEAOLx0DzEW91s5L: 1,
    '6isaRliLnb31IoAIL': 3,
    Ugq8cNqnhUSjfJeHr: 2,
    '73pVXuygDYAtIMOhI': 1,
    DD9jrAixr0QMvQIE3: 2,
    dcm4uXhiGIjVdJAzS: 3,
    FIbyK6uHUntt2kNy3: 11,
    hxwow9BB75z8RV3JT: 2,
    '3S2T1ZBxB9zhRJTBB': 42,
    oUWi8ci7F2R9V5ZFy: 44,
    eHhCNFErvfnC42mEc: 1,
    ji95MgtBVgGJF7XcP: 2,
    suHgi59tSfu02VsRO: 1,
    CUdKmb25Z3HjkoDiN: 1,
    '9eUGCilmJ8HDf60mL': 5,
    OeaEEGdhvUSkXRrWU: 2,
    '4efvuMEdxdQPCreW7': 1,
    hi0DJXpcyzDwtg2Fm: 2,
    '1XdITM6u7PbhUrlmK': 1,
    Lc0Hoa8MgAbscJA4w: 1,
    PJEXhmQM0hkN8K3BK: 1,
    LYeOfHQwsv7FsfdGV: 1,
    BKpHLQrJPmgXE51tf: 1,
    Gm6qjTgGqxkEZTkuJ: 1
}

const results = [
    {
        country: 'Worldometer',
        keyValueStore: 'SmuuI0oebnTWjRTUh',
        keyValueStoreNumber: kvs.SmuuI0oebnTWjRTUh,
        dataset: '6isaRliLnb31IoAIL',
        datasetNumber: datasets['6isaRliLnb31IoAIL']
    }
]

for (let i in data) {
    let country = data[i].title

    let keyValueStore = ''
    if (data[i].latestApi) {
        keyValueStore = data[i].latestApi.url
            .replace('https://api.apify.com/v2/key-value-stores/', '')
            .replace('/records/LATEST?disableRedirect=true', '')
    }

    let keyValueStoreNumber = 0
    if (kvs[keyValueStore]) {
        keyValueStoreNumber = kvs[keyValueStore]
    }

    let dataset = ''
    if (data[i].historyApi) {
        dataset = data[i].historyApi.url
            .replace('https://api.apify.com/v2/datasets/', '')
            .replace('/items?format=json&clean=1', '')
            .replace('/items?format=json', '')
    }

    let datasetNumber = 0
    if (datasets[dataset]) {
        datasetNumber = datasets[dataset]
    }

    const result = {
        country,
        keyValueStore,
        keyValueStoreNumber,
        dataset,
        datasetNumber
    }
    results.push(result)
}
results
