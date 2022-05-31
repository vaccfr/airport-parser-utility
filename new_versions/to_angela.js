const VaccAtcPositions = [
    {
        code: "LFFF",
        name: "Paris",
        airports: [
            {
                icao: "LFAQ",
                name: "Albert-Bray Airport",
                city: "Albert/Bray",
                state: "Hauts-de-France",
                lat: 49.9715003967,
                lon: 2.6976599693,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFAQ",
                        position_code: "LFAQ_TWR",
                        position_type: "TWR",
                        callsign: "Albert-Bray Tower",
                        frequency: "119.650",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFAT",
                name: "Le Touquet-Cote d'Opale Airport",
                city: "Le Touquet-Paris-Plage",
                state: "Hauts-de-France",
                lat: 50.5173988342,
                lon: 1.6205899715,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFAT",
                        position_code: "LFAT_TWR",
                        position_type: "TWR",
                        callsign: "Le Touquet Tower",
                        frequency: "118.450",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFOA",
                name: "Avord (BA 702) Air Base",
                city: "Avord",
                state: "Centre",
                lat: 47.0532989502,
                lon: 2.6324999332,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFOA",
                        position_code: "LFOA_APP",
                        position_type: "APP",
                        callsign: "Avord Approach",
                        frequency: "119.700",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFOA",
                        position_code: "LFOA_TWR",
                        position_type: "TWR",
                        callsign: "Avord Tower",
                        frequency: "122.100",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFOB",
                name: "Paris Beauvais Tille Airport",
                city: "Beauvais/Tille",
                state: "Hauts-de-France",
                lat: 49.4543991089,
                lon: 2.1127800941,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFOB",
                        position_code: "LFOB_APP",
                        position_type: "APP",
                        callsign: "Beauvais Approach",
                        frequency: "119.900",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFOB",
                        position_code: "LFOB_TWR",
                        position_type: "TWR",
                        callsign: "Beauvais Tower",
                        frequency: "121.400",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFOC",
                name: "Chateaudun (BA 279) Airport",
                city: "Chateaudun",
                state: "Centre",
                lat: 48.0581016541,
                lon: 1.3766200542,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFOC",
                        position_code: "LFOC_TWR",
                        position_type: "TWR",
                        callsign: "Chateaudun Tower",
                        frequency: "122.100",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFOH",
                name: "Le Havre Octeville Airport",
                city: "Le Havre/Octeville",
                state: "Normandy",
                lat: 49.5339012146,
                lon: 0.0880559981,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFOH",
                        position_code: "LFOH_I_TWR",
                        position_type: "TWR",
                        callsign: "Le Havre AFIS",
                        frequency: "135.200",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFOJ",
                name: "Orleans-Bricy (BA 123) Air Base",
                city: "Orleans/Bricy",
                state: "Centre",
                lat: 47.9878005981,
                lon: 1.7605600357,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFOJ",
                        position_code: "LFOJ_APP",
                        position_type: "APP",
                        callsign: "Orleans Approach",
                        frequency: "122.700",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFOJ",
                        position_code: "LFOJ_TWR",
                        position_type: "TWR",
                        callsign: "Orleans Tower",
                        frequency: "124.800",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFOP",
                name: "Rouen Airport",
                city: "Rouen/Vallee de Seine",
                state: "Normandy",
                lat: 49.3842010498,
                lon: 1.1748000383,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFOP",
                        position_code: "LFOP_APP",
                        position_type: "APP",
                        callsign: "Rouen Approach",
                        frequency: "118.570",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFOP",
                        position_code: "LFOP_TWR",
                        position_type: "TWR",
                        callsign: "Rouen Tower",
                        frequency: "120.200",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFOT",
                name: "Tours-Val-de-Loire Airport",
                city: "Tours/Val de Loire (Loire Valley)",
                state: "Centre",
                lat: 47.4322013855,
                lon: 0.7276059985,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFOT",
                        position_code: "LFOT_APP",
                        position_type: "APP",
                        callsign: "Tours Approach",
                        frequency: "121.000",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFOT",
                        position_code: "LFOT_TWR",
                        position_type: "TWR",
                        callsign: "Tours Tower",
                        frequency: "118.300",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFOU",
                name: "Cholet Le Pontreau Airport",
                city: "Cholet/Le Pontreau",
                state: "Pays-de-la-Loire",
                lat: 47.0820999146,
                lon: -0.8770639896,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFOU",
                        position_code: "LFOU_I_TWR",
                        position_type: "TWR",
                        callsign: "Cholet AFIS",
                        frequency: "120.400",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFPB",
                name: "Paris-Le Bourget Airport",
                city: "Paris",
                state: "Ile-de-France",
                lat: 48.9693984985,
                lon: 2.4413900375,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFPB",
                        position_code: "LFPB_DEL",
                        position_type: "DEL",
                        callsign: "Le Bourget Delivery",
                        frequency: "121.950",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFPB",
                        position_code: "LFPB_GND",
                        position_type: "GND",
                        callsign: "Le Bourget Ground",
                        frequency: "121.900",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFPB",
                        position_code: "LFPB_TWR",
                        position_type: "TWR",
                        callsign: "Le Bourget Tower",
                        frequency: "118.920",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFPG",
                name: "Charles de Gaulle International Airport",
                city: "Paris",
                state: "Ile-de-France",
                lat: 49.0127983093,
                lon: 2.5499999523,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFPG",
                        position_code: "LFPG_APP",
                        position_type: "APP",
                        callsign: "De Gaulle Approach",
                        frequency: "121.150",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFPG",
                        position_code: "LFPG_A_GND",
                        position_type: "GND",
                        callsign: "De Gaulle Apron",
                        frequency: "121.670",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFPG",
                        position_code: "LFPG_DEL",
                        position_type: "DEL",
                        callsign: "De Gaulle Delivery",
                        frequency: "121.850",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFPG",
                        position_code: "LFPG_DEP",
                        position_type: "DEP",
                        callsign: "De Gaulle Departure",
                        frequency: "124.350",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFPG",
                        position_code: "LFPG_F_APP",
                        position_type: "APP",
                        callsign: "De Gaulle Arrival",
                        frequency: "126.420",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFPG",
                        position_code: "LFPG_GND",
                        position_type: "GND",
                        callsign: "De Gaulle Ground",
                        frequency: "121.600",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFPG",
                        position_code: "LFPG_G_APP",
                        position_type: "APP",
                        callsign: "De Gaulle Arrival",
                        frequency: "118.150",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFPG",
                        position_code: "LFPG_S_APP",
                        position_type: "APP",
                        callsign: "De Gaulle Approach",
                        frequency: "125.820",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFPG",
                        position_code: "LFPG_S_DEP",
                        position_type: "DEP",
                        callsign: "De Gaulle Departure",
                        frequency: "133.370",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFPG",
                        position_code: "LFPG_S_GND",
                        position_type: "GND",
                        callsign: "De Gaulle Ground",
                        frequency: "121.800",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFPG",
                        position_code: "LFPG_S_TWR",
                        position_type: "TWR",
                        callsign: "De Gaulle Tower",
                        frequency: "120.900",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFPG",
                        position_code: "LFPG_TWR",
                        position_type: "TWR",
                        callsign: "De Gaulle Tower",
                        frequency: "119.250",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFPL",
                name: "Lognes Emerainville Airport",
                city: "Paris",
                state: "Ile-de-France",
                lat: 48.8231010437,
                lon: 2.6238899231,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFPL",
                        position_code: "LFPL_TWR",
                        position_type: "TWR",
                        callsign: "Lognes Tower",
                        frequency: "118.600",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFPN",
                name: "Toussus-le-Noble Airport",
                city: "Toussus-le-Noble",
                state: "Ile-de-France",
                lat: 48.7518997192,
                lon: 2.1061899662,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFPN",
                        position_code: "LFPN_TWR",
                        position_type: "TWR",
                        callsign: "Toussus Tower",
                        frequency: "119.300",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFPO",
                name: "Paris-Orly Airport",
                city: "Paris",
                state: "Ile-de-France",
                lat: 48.7252998352,
                lon: 2.3594400883,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFPO",
                        position_code: "LFPO_APP",
                        position_type: "APP",
                        callsign: "Orly Approach",
                        frequency: "123.870",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFPO",
                        position_code: "LFPO_DEL",
                        position_type: "DEL",
                        callsign: "Orly Delivery",
                        frequency: "121.550",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFPO",
                        position_code: "LFPO_DEP",
                        position_type: "DEP",
                        callsign: "Orly Departure",
                        frequency: "127.750",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFPO",
                        position_code: "LFPO_F_APP",
                        position_type: "APP",
                        callsign: "Orly Arrival",
                        frequency: "124.450",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFPO",
                        position_code: "LFPO_GND",
                        position_type: "GND",
                        callsign: "Orly Ground",
                        frequency: "121.700",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFPO",
                        position_code: "LFPO_TWR",
                        position_type: "TWR",
                        callsign: "Orly Tower",
                        frequency: "118.700",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFQQ",
                name: "Lille-Lesquin Airport",
                city: "Lille/Lesquin",
                state: "Hauts-de-France",
                lat: 50.5619010925,
                lon: 3.0894401073,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFQQ",
                        position_code: "LFQQ_APP",
                        position_type: "APP",
                        callsign: "Lille Approach",
                        frequency: "126.470",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFQQ",
                        position_code: "LFQQ_GND",
                        position_type: "GND",
                        callsign: "Lille Ground",
                        frequency: "121.800",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFQQ",
                        position_code: "LFQQ_TWR",
                        position_type: "TWR",
                        callsign: "Lille Tower",
                        frequency: "118.550",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFQT",
                name: "Merville-Calonne Airport",
                city: "Merville/Calonne",
                state: "Hauts-de-France",
                lat: 50.6184005737,
                lon: 2.6422400475,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFQT",
                        position_code: "LFQT_TWR",
                        position_type: "TWR",
                        callsign: "Merville Tower",
                        frequency: "119.070",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFYR",
                name: "Romorantin Pruniers Airport",
                city: "St Pierre I",
                state: "Centre",
                lat: 47.3208007813,
                lon: 1.6888899803,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFYR",
                        position_code: "LFYR_TWR",
                        position_type: "TWR",
                        callsign: "Romorantin Tower",
                        frequency: "119.070",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            }
        ],
        centres: [
            {
                icao: "LFFF",
                position_code: "LFFF_CTR",
                position_type: "CTR",
                callsign: "Paris Control",
                frequency: "128.100",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: "S3"
            },
            {
                icao: "LFFF",
                position_code: "LFFF_N_CTR",
                position_type: "CTR",
                callsign: "Paris Control",
                frequency: "128.870",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: "S3"
            },
            {
                icao: "LFFF",
                position_code: "LFFF_S_CTR",
                position_type: "CTR",
                callsign: "Paris Control",
                frequency: "132.370",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: "S3"
            },
            {
                icao: "LFFF",
                position_code: "LFFF_W_CTR",
                position_type: "CTR",
                callsign: "Paris Control",
                frequency: "122.570",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: "S3"
            },
        ]
    },
    {
        code: "LFEE",
        name: "Reims",
        airports: [
            {
                icao: "LFGA",
                name: "Colmar-Houssen Airport",
                city: "Colmar/Houssen",
                state: "Grand-Est",
                lat: 48.1099014282,
                lon: 7.3590102196,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFGA",
                        position_code: "LFGA_TWR",
                        position_type: "TWR",
                        callsign: "Houssen Tower",
                        frequency: "119.000",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFGJ",
                name: "Dole-Tavaux Airport",
                city: "Dole/Tavaux",
                state: "Bourgogne-Franche-Comte",
                lat: 47.0390014648,
                lon: 5.4272499084,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFGJ",
                        position_code: "LFGJ_TWR",
                        position_type: "TWR",
                        callsign: "Dole Tower",
                        frequency: "130.775",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFJL",
                name: "Metz-Nancy-Lorraine Airport",
                city: "Metz / Nancy",
                state: "Grand-Est",
                lat: 48.9821014404,
                lon: 6.2513198853,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFJL",
                        position_code: "LFJL_APP",
                        position_type: "APP",
                        callsign: "Lorraine Approach",
                        frequency: "119.120",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFJL",
                        position_code: "LFJL_GND",
                        position_type: "GND",
                        callsign: "Lorraine Ground",
                        frequency: "121.700",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFJL",
                        position_code: "LFJL_TWR",
                        position_type: "TWR",
                        callsign: "Lorraine Tower",
                        frequency: "122.070",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFSB",
                name: "EuroAirport Basel-Mulhouse-Freiburg Airport",
                city: "Bale/Mulhouse",
                state: "Grand-Est",
                lat: 47.5895996094,
                lon: 7.5299100876,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFSB",
                        position_code: "LFSB_APP",
                        position_type: "APP",
                        callsign: "Bale Approach",
                        frequency: "119.350",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFSB",
                        position_code: "LFSB_C_APP",
                        position_type: "APP",
                        callsign: "Bale Control",
                        frequency: "135.850",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFSB",
                        position_code: "LFSB_DEL",
                        position_type: "DEL",
                        callsign: "Bale Delivery",
                        frequency: "121.950",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFSB",
                        position_code: "LFSB_GND",
                        position_type: "GND",
                        callsign: "Bale Ground",
                        frequency: "121.600",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFSB",
                        position_code: "LFSB_TWR",
                        position_type: "TWR",
                        callsign: "Bale Tower",
                        frequency: "118.300",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFSF",
                name: "Metz-Frescaty (BA 128) Air Base",
                city: "Metz/Frescaty",
                state: "Grand-Est",
                lat: 49.0717010498,
                lon: 6.1316699982,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFSF",
                        position_code: "LFSF_TWR",
                        position_type: "TWR",
                        callsign: "Metz Tower",
                        frequency: "119.700",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFSI",
                name: "Saint-Dizier-Robinson (BA 113) Air Base",
                city: "Saint-Dizier/Robinson",
                state: "Grand-Est",
                lat: 48.6360015869,
                lon: 4.8994197845,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFSI",
                        position_code: "LFSI_TWR",
                        position_type: "TWR",
                        callsign: "Saint Dizier Tower",
                        frequency: "122.100",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFSO",
                name: "Nancy-Ochey (BA 133) Air Base",
                city: "Nancy/Ochey",
                state: "Grand-Est",
                lat: 48.5830993652,
                lon: 5.9549999237,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFSO",
                        position_code: "LFSO_TWR",
                        position_type: "TWR",
                        callsign: "Ochey Tower",
                        frequency: "133.200",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFSR",
                name: "Reims-Champagne (BA 112) Airport",
                city: "Reims/Champagne",
                state: "Grand-Est",
                lat: 49.3100013733,
                lon: 4.0500001907,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFSR",
                        position_code: "LFSR_APP",
                        position_type: "APP",
                        callsign: "Reims Approach",
                        frequency: "119.800",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFSR",
                        position_code: "LFSR_TWR",
                        position_type: "TWR",
                        callsign: "Reims Tower",
                        frequency: "118.270",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFST",
                name: "Strasbourg Airport",
                city: "Strasbourg",
                state: "Grand-Est",
                lat: 48.5382995605,
                lon: 7.6282300949,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFST",
                        position_code: "LFST_APP",
                        position_type: "APP",
                        callsign: "Strasbourg Approach",
                        frequency: "120.700",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFST",
                        position_code: "LFST_GND",
                        position_type: "GND",
                        callsign: "Strasbourg Ground",
                        frequency: "121.800",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFST",
                        position_code: "LFST_TWR",
                        position_type: "TWR",
                        callsign: "Strasbourg Tower",
                        frequency: "119.250",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFSX",
                name: "Luxeuil-Saint-Sauveur (BA 116) Air Base",
                city: "Luxeuil/Saint-Sauveur",
                state: "Bourgogne-Franche-Comte",
                lat: 47.7831001282,
                lon: 6.3640599251,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFSX",
                        position_code: "LFSX_TWR",
                        position_type: "TWR",
                        callsign: "Luxeuil Tower",
                        frequency: "122.100",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            }
        ],
        centres: [
            {
                icao: "LFEE",
                position_code: "LFEE_CTR",
                position_type: "CTR",
                callsign: "Reims Control",
                frequency: "128.300",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: "S3"
            },
            {
                icao: "LFEE",
                position_code: "LFEE_N_CTR",
                position_type: "CTR",
                callsign: "Reims Control",
                frequency: "127.550",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: "S3"
            },
            {
                icao: "LFEE",
                position_code: "LFEE_S_CTR",
                position_type: "CTR",
                callsign: "Reims Control",
                frequency: "135.100",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: "S3"
            }
        ]
    },
    {
        code: "LFRR",
        name: "Brest",
        airports: [
            {
                icao: "LFRB",
                name: "Brest Bretagne Airport",
                city: "Brest/Guipavas",
                state: "Brittany",
                lat: 48.4478988647,
                lon: -4.4185400009,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFRB",
                        position_code: "LFRB_APP",
                        position_type: "APP",
                        callsign: "Iroise Approach",
                        frequency: "119.570",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFRB",
                        position_code: "LFRB_I_APP",
                        position_type: "APP",
                        callsign: "Brest Info",
                        frequency: "135.820",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFRB",
                        position_code: "LFRB_TWR",
                        position_type: "TWR",
                        callsign: "Bretagne Tower",
                        frequency: "120.100",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFRC",
                name: "Cherbourg-Maupertus Airport",
                city: "Cherbourg/Maupertus",
                state: "Normandy",
                lat: 49.650100708,
                lon: -1.4702800512,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFRC",
                        position_code: "LFRC_I_TWR",
                        position_type: "TWR",
                        callsign: "Cherbourg AFIS",
                        frequency: "119.620",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFRD",
                name: "Dinard-Pleurtuit-Saint-Malo Airport",
                city: "Dinard/Pleurtuit/Saint-Malo",
                state: "Brittany",
                lat: 48.5876998901,
                lon: -2.0799601078,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFRD",
                        position_code: "LFRD_TWR",
                        position_type: "TWR",
                        callsign: "Dinard Tower",
                        frequency: "120.150",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFRG",
                name: "Deauville-Saint-Gatien Airport",
                city: "Deauville",
                state: "Normandy",
                lat: 49.3652992249,
                lon: 0.1543059945,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFRG",
                        position_code: "LFRG_APP",
                        position_type: "APP",
                        callsign: "Deauville Approach",
                        frequency: "120.350",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFRG",
                        position_code: "LFRG_TWR",
                        position_type: "TWR",
                        callsign: "Deauville Tower",
                        frequency: "118.300",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFRH",
                name: "Lorient South Brittany (Bretagne Sud) Airport",
                city: "Lorient/Lann/Bihoue",
                state: "Brittany",
                lat: 47.7606010437,
                lon: -3.4400000572,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFRH",
                        position_code: "LFRH_APP",
                        position_type: "APP",
                        callsign: "Lorient Approach",
                        frequency: "123.000",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFRH",
                        position_code: "LFRH_TWR",
                        position_type: "TWR",
                        callsign: "Lorient Tower",
                        frequency: "119.700",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFRK",
                name: "Caen-Carpiquet Airport",
                city: "Caen/Carpiquet",
                state: "Normandy",
                lat: 49.1733016968,
                lon: -0.4499999881,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFRK",
                        position_code: "LFRK_TWR",
                        position_type: "TWR",
                        callsign: "Caen Tower",
                        frequency: "134.520",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFRN",
                name: "Rennes-Saint-Jacques Airport",
                city: "Rennes/Saint-Jacques",
                state: "Brittany",
                lat: 48.0694999695,
                lon: -1.7347899675,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFRN",
                        position_code: "LFRN_APP",
                        position_type: "APP",
                        callsign: "Rennes Approach",
                        frequency: "134.000",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFRN",
                        position_code: "LFRN_C_APP",
                        position_type: "APP",
                        callsign: "Contentin Info",
                        frequency: "134.200",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFRN",
                        position_code: "LFRN_GND",
                        position_type: "GND",
                        callsign: "Rennes Ground",
                        frequency: "121.720",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFRN",
                        position_code: "LFRN_N_APP",
                        position_type: "APP",
                        callsign: "Rennes North Approach",
                        frequency: "126.950",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFRN",
                        position_code: "LFRN_TWR",
                        position_type: "TWR",
                        callsign: "Rennes Tower",
                        frequency: "120.500",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFRQ",
                name: "Quimper-Cornouaille Airport",
                city: "Quimper/Pluguffan",
                state: "Brittany",
                lat: 47.9749984741,
                lon: -4.1677899361,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFRQ",
                        position_code: "LFRQ_TWR",
                        position_type: "TWR",
                        callsign: "Quimper Tower",
                        frequency: "118.620",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFRS",
                name: "Nantes Atlantique Airport",
                city: "Nantes",
                state: "Pays-de-la-Loire",
                lat: 47.1531982422,
                lon: -1.610730052,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFRS",
                        position_code: "LFRS_APP",
                        position_type: "APP",
                        callsign: "Nantes Approach",
                        frequency: "124.420",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFRS",
                        position_code: "LFRS_GND",
                        position_type: "GND",
                        callsign: "Nantes Ground",
                        frequency: "121.650",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFRS",
                        position_code: "LFRS_N_APP",
                        position_type: "APP",
                        callsign: "Nantes Information",
                        frequency: "124.250",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFRS",
                        position_code: "LFRS_TWR",
                        position_type: "TWR",
                        callsign: "Nantes Tower",
                        frequency: "118.650",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFRZ",
                name: "Saint-Nazaire-Montoir Airport",
                city: "Saint-Nazaire/Montoir",
                state: "Pays-de-la-Loire",
                lat: 47.3121986389,
                lon: -2.1491799355,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFRZ",
                        position_code: "LFRZ_TWR",
                        position_type: "TWR",
                        callsign: "Saint Nazaire Tower",
                        frequency: "118.950",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            }
        ],
        centres: [
            {
                icao: "LFRR",
                position_code: "LFRR_CTR",
                position_type: "CTR",
                callsign: "Brest Control",
                frequency: "125.500",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: "S3"
            },
            {
                icao: "LFRR",
                position_code: "LFRR_E_CTR",
                position_type: "CTR",
                callsign: "Brest Control",
                frequency: "136.000",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: "S3"
            },
            {
                icao: "LFRR",
                position_code: "LFRR_L_CTR",
                position_type: "CTR",
                callsign: "Brest Control",
                frequency: "124.670",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: "S3"
            },
            {
                icao: "LFRR",
                position_code: "LFRR_N_CTR",
                position_type: "CTR",
                callsign: "Brest Control",
                frequency: "127.850",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: "S3"
            },
            {
                icao: "LFRR",
                position_code: "LFRR_Q_CTR",
                position_type: "CTR",
                callsign: "Brest Control",
                frequency: "130.220",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: "S3"
            },
            {
                icao: "LFRR",
                position_code: "LFRR_S_CTR",
                position_type: "CTR",
                callsign: "Brest Control",
                frequency: "127.200",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: "S3"
            }
        ]
    },
    {
        code: "LFBB",
        name: "Bordeaux",
        airports: [
            {
                icao: "LFBA",
                name: "Agen-La Garenne Airport",
                city: "Agen/La Garenne",
                state: "Nouvelle-Aquitaine",
                lat: 44.1747016907,
                lon: 0.5905560255,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFBA",
                        position_code: "LFBA_TWR",
                        position_type: "TWR",
                        callsign: "Agen Tower",
                        frequency: "121.300",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFBD",
                name: "Bordeaux-Merignac (BA 106) Airport",
                city: "Bordeaux/Merignac",
                state: "Nouvelle-Aquitaine",
                lat: 44.8283004761,
                lon: -0.7155560255,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFBD",
                        position_code: "LFBD_APP",
                        position_type: "APP",
                        callsign: "Aquitaine Approach",
                        frequency: "119.270",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFBD",
                        position_code: "LFBD_E_APP",
                        position_type: "APP",
                        callsign: "Aquitaine East Approach",
                        frequency: "129.870",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFBD",
                        position_code: "LFBD_GND",
                        position_type: "GND",
                        callsign: "Merignac Ground",
                        frequency: "121.900",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFBD",
                        position_code: "LFBD_TWR",
                        position_type: "TWR",
                        callsign: "Merignac Tower",
                        frequency: "118.300",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFBE",
                name: "Bergerac-Roumaniere Airport",
                city: "Bergerac/Roumaniere",
                state: "Nouvelle-Aquitaine",
                lat: 44.8252983093,
                lon: 0.5186110139,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFBE",
                        position_code: "LFBE_TWR",
                        position_type: "TWR",
                        callsign: "Bergerac Tower",
                        frequency: "119.800",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFBG",
                name: "Cognac-Chateaubernard (BA 709) Air Base",
                city: "Cognac/Chateaubernard",
                state: "Nouvelle-Aquitaine",
                lat: 45.6582984924,
                lon: -0.3174999952,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFBG",
                        position_code: "LFBG_TWR",
                        position_type: "TWR",
                        callsign: "Cognac Tower",
                        frequency: "120.070",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFBH",
                name: "La Rochelle-Ile de Re Airport",
                city: "La Rochelle/Ile de Re",
                state: "Nouvelle-Aquitaine",
                lat: 46.1791992188,
                lon: -1.1952799559,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFBH",
                        position_code: "LFBH_APP",
                        position_type: "APP",
                        callsign: "La Rochelle Approach",
                        frequency: "124.200",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFBH",
                        position_code: "LFBH_TWR",
                        position_type: "TWR",
                        callsign: "La Rochelle Tower",
                        frequency: "118.000",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFBI",
                name: "Poitiers-Biard Airport",
                city: "Poitiers/Biard",
                state: "Nouvelle-Aquitaine",
                lat: 46.5876998901,
                lon: 0.3066659868,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFBI",
                        position_code: "LFBI_APP",
                        position_type: "APP",
                        callsign: "Poitiers Approach",
                        frequency: "134.100",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFBI",
                        position_code: "LFBI_TWR",
                        position_type: "TWR",
                        callsign: "Poitiers Biard Tower",
                        frequency: "118.500",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFBL",
                name: "Limoges Airport",
                city: "Limoges/Bellegarde",
                state: "Nouvelle-Aquitaine",
                lat: 45.8628005981,
                lon: 1.1794400215,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFBL",
                        position_code: "LFBL_APP",
                        position_type: "APP",
                        callsign: "Limoge Approach",
                        frequency: "118.070",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFBL",
                        position_code: "LFBL_TWR",
                        position_type: "TWR",
                        callsign: "Limoges Tower",
                        frequency: "119.050",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFBO",
                name: "Toulouse-Blagnac Airport",
                city: "Toulouse/Blagnac",
                state: "Occitanie",
                lat: 43.6291007996,
                lon: 1.3638199568,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFBO",
                        position_code: "LFBO_APP",
                        position_type: "APP",
                        callsign: "Toulouse Approach",
                        frequency: "129.300",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFBO",
                        position_code: "LFBO_DEL",
                        position_type: "DEL",
                        callsign: "Blagnac Delivery",
                        frequency: "121.700",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFBO",
                        position_code: "LFBO_E_APP",
                        position_type: "APP",
                        callsign: "Toulouse East Approach",
                        frequency: "125.170",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFBO",
                        position_code: "LFBO_GND",
                        position_type: "GND",
                        callsign: "Blagnac Ground",
                        frequency: "121.900",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFBO",
                        position_code: "LFBO_TWR",
                        position_type: "TWR",
                        callsign: "Blagnac Tower",
                        frequency: "118.100",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFBO",
                        position_code: "LFBO_W_APP",
                        position_type: "APP",
                        callsign: "Toulouse West Approach",
                        frequency: "121.100",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    }
                ]
            },
            {
                icao: "LFBP",
                name: "Pau Pyrenees Airport",
                city: "Pau/Pyrenees (Uzein)",
                state: "Nouvelle-Aquitaine",
                lat: 43.3800010681,
                lon: -0.41861099,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFBP",
                        position_code: "LFBP_APP",
                        position_type: "APP",
                        callsign: "Pyrennees Approach",
                        frequency: "128.800",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFBP",
                        position_code: "LFBP_GND",
                        position_type: "GND",
                        callsign: "Pau Ground",
                        frequency: "121.750",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFBP",
                        position_code: "LFBP_TWR",
                        position_type: "TWR",
                        callsign: "Pau Tower",
                        frequency: "124.150",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFBT",
                name: "Tarbes-Lourdes-Pyrenees Airport",
                city: "Tarbes/Lourdes/Pyrenees",
                state: "Occitanie",
                lat: 43.1786994934,
                lon: -0.0064389999,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFBT",
                        position_code: "LFBT_GND",
                        position_type: "GND",
                        callsign: "Lourdes Ground",
                        frequency: "121.950",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFBT",
                        position_code: "LFBT_TWR",
                        position_type: "TWR",
                        callsign: "Lourdes Tower",
                        frequency: "120.300",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFBZ",
                name: "Biarritz-Anglet-Bayonne Airport",
                city: "Biarritz/Anglet/Bayonne",
                state: "Nouvelle-Aquitaine",
                lat: 43.4683990479,
                lon: -1.5233199596,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFBZ",
                        position_code: "LFBZ_APP",
                        position_type: "APP",
                        callsign: "Biarritz Approach",
                        frequency: "125.600",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFBZ",
                        position_code: "LFBZ_GND",
                        position_type: "GND",
                        callsign: "Biarritz Ground",
                        frequency: "121.950",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFBZ",
                        position_code: "LFBZ_TWR",
                        position_type: "TWR",
                        callsign: "Biarritz Tower",
                        frequency: "118.700",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFCL",
                name: "Toulouse-Lasbordes Airport",
                city: "Toulouse/Lasbordes",
                state: "Occitanie",
                lat: 43.586101532,
                lon: 1.4991699457,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFCL",
                        position_code: "LFCL_TWR",
                        position_type: "TWR",
                        callsign: "Lasbordes Tower",
                        frequency: "122.700",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFCR",
                name: "Rodez-Marcillac Airport",
                city: "Rodez/Marcillac",
                state: "Occitanie",
                lat: 44.4079017639,
                lon: 2.4826700687,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFCR",
                        position_code: "LFCR_TWR",
                        position_type: "TWR",
                        callsign: "Rodez Tower",
                        frequency: "118.120",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            }
        ],
        centres: [
            {
                icao: "LFBB",
                position_code: "LFBB_CTR",
                position_type: "CTR",
                callsign: "Bordeaux Control",
                frequency: "125.100",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: "S3"
            },
            {
                icao: "LFBB",
                position_code: "LFBB_N_CTR",
                position_type: "CTR",
                callsign: "Bordeaux Control",
                frequency: "118.420",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: "S3"
            },
            {
                icao: "LFBB",
                position_code: "LFBB_S_CTR",
                position_type: "CTR",
                callsign: "Bordeaux Control",
                frequency: "136.050",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: "S3"
            }
        ]
    },
    {
        code: "LFMM",
        name: "Marseille",
        airports: [
            {
                icao: "LFKB",
                name: "Bastia-Poretta Airport",
                city: "Bastia/Poretta",
                state: "Corsica",
                lat: 42.5527000427,
                lon: 9.4837303162,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFKB",
                        position_code: "LFKB_APP",
                        position_type: "APP",
                        callsign: "Bastia Approach",
                        frequency: "123.820",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFKB",
                        position_code: "LFKB_GND",
                        position_type: "GND",
                        callsign: "Bastia Ground",
                        frequency: "121.820",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFKB",
                        position_code: "LFKB_TWR",
                        position_type: "TWR",
                        callsign: "Bastia Tower",
                        frequency: "118.000",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFKC",
                name: "Calvi-Sainte-Catherine Airport",
                city: "Calvi/Sainte-Catherine",
                state: "Corsica",
                lat: 42.5307998657,
                lon: 8.7931900024,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFKC",
                        position_code: "LFKC_GND",
                        position_type: "GND",
                        callsign: "Calvi Ground",
                        frequency: "121.700",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFKC",
                        position_code: "LFKC_TWR",
                        position_type: "TWR",
                        callsign: "Calvi Tower",
                        frequency: "123.200",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFKF",
                name: "Figari Sud-Corse Airport",
                city: "Figari Sud-Corse",
                state: "Corsica",
                lat: 41.5005989075,
                lon: 9.0977802277,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFKF",
                        position_code: "LFKF_GND",
                        position_type: "GND",
                        callsign: "Figari Ground",
                        frequency: "121.800",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFKF",
                        position_code: "LFKF_TWR",
                        position_type: "TWR",
                        callsign: "Figari Tower",
                        frequency: "120.300",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFKJ",
                name: "Ajaccio-Napoleon Bonaparte Airport",
                city: "Ajaccio/Napoleon Bonaparte",
                state: "Corsica",
                lat: 41.9235992432,
                lon: 8.8029203415,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFKJ",
                        position_code: "LFKJ_APP",
                        position_type: "APP",
                        callsign: "Ajaccio Approach",
                        frequency: "121.050",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFKJ",
                        position_code: "LFKJ_GND",
                        position_type: "GND",
                        callsign: "Ajaccio Ground",
                        frequency: "121.700",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFKJ",
                        position_code: "LFKJ_TWR",
                        position_type: "TWR",
                        callsign: "Ajaccio Tower",
                        frequency: "118.070",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFLB",
                name: "Chambery-Savoie Airport",
                city: "Chambery/Aix-les-Bains",
                state: "Auvergne-Rhone-Alpes",
                lat: 45.6380996704,
                lon: 5.88022995,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFLB",
                        position_code: "LFLB_APP",
                        position_type: "APP",
                        callsign: "Chambery Approach",
                        frequency: "123.700",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFLB",
                        position_code: "LFLB_TWR",
                        position_type: "TWR",
                        callsign: "Chambery Tower",
                        frequency: "118.300",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFLC",
                name: "Clermont-Ferrand Auvergne Airport",
                city: "Clermont-Ferrand/Auvergne",
                state: "Auvergne-Rhone-Alpes",
                lat: 45.7867012024,
                lon: 3.1691699028,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFLC",
                        position_code: "LFLC_APP",
                        position_type: "APP",
                        callsign: "Clermont Approach",
                        frequency: "119.370",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFLC",
                        position_code: "LFLC_GND",
                        position_type: "GND",
                        callsign: "Clermont Ground",
                        frequency: "121.950",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFLC",
                        position_code: "LFLC_S_APP",
                        position_type: "APP",
                        callsign: "Clermont South Approach",
                        frequency: "133.720",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFLC",
                        position_code: "LFLC_TWR",
                        position_type: "TWR",
                        callsign: "Clermont Tower",
                        frequency: "118.620",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFLD",
                name: "Bourges Airport",
                city: "Bourges",
                state: "Centre",
                lat: 47.0581016541,
                lon: 2.3702800274,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFLD",
                        position_code: "LFLD_I_TWR",
                        position_type: "TWR",
                        callsign: "Bourges AFIS",
                        frequency: "119.600",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFLG",
                name: "Grenoble Le Versoud Airport",
                city: "Bourges",
                state: "Auvergne-Rhone-Alpes",
                lat: 45.2192001343,
                lon: 5.8497200012,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFLG",
                        position_code: "LFLG_GND",
                        position_type: "GND",
                        callsign: "Le Versoux ground",
                        frequency: "121.650",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFLG",
                        position_code: "LFLG_TWR",
                        position_type: "TWR",
                        callsign: "Le Versoux Tower",
                        frequency: "121.000",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFLL",
                name: "Lyon Saint-Exupery Airport",
                city: "Lyon",
                state: "Auvergne-Rhone-Alpes",
                lat: 45.726398468,
                lon: 5.0908298492,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFLL",
                        position_code: "LFLL_APP",
                        position_type: "APP",
                        callsign: "Lyon Approach",
                        frequency: "125.450",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFLL",
                        position_code: "LFLL_DEL",
                        position_type: "DEL",
                        callsign: "Saint Exupery Delivery",
                        frequency: "121.650",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFLL",
                        position_code: "LFLL_DEP",
                        position_type: "DEP",
                        callsign: "Lyon Departure",
                        frequency: "133.150",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFLL",
                        position_code: "LFLL_E_APP",
                        position_type: "APP",
                        callsign: "Lyon East Approach",
                        frequency: "136.070",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFLL",
                        position_code: "LFLL_GND",
                        position_type: "GND",
                        callsign: "Saint Exupery Ground",
                        frequency: "121.820",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFLL",
                        position_code: "LFLL_TWR",
                        position_type: "TWR",
                        callsign: "Saint-Exupery Tower",
                        frequency: "120.450",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFLP",
                name: "Annecy-Haute-Savoie-Mont Blanc Airport",
                city: "Annecy/Meythet",
                state: "Auvergne-Rhone-Alpes",
                lat: 45.9291992188,
                lon: 6.098760128,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFLP",
                        position_code: "LFLP_TWR",
                        position_type: "TWR",
                        callsign: "Annecy Tower",
                        frequency: "118.200",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFLS",
                name: "Grenoble-Isere Airport",
                city: "Grenoble/Saint-Geoirs",
                state: "Auvergne-Rhone-Alpes",
                lat: 45.3628997803,
                lon: 5.3293700218,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFLS",
                        position_code: "LFLS_GND",
                        position_type: "GND",
                        callsign: "Grenoble Ground",
                        frequency: "121.920",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFLS",
                        position_code: "LFLS_TWR",
                        position_type: "TWR",
                        callsign: "Grenoble Tower",
                        frequency: "119.300",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFLV",
                name: "Vichy-Charmeil Airport",
                city: "Vichy/Charmeil",
                state: "Auvergne-Rhone-Alpes",
                lat: 46.1697006226,
                lon: 3.4037399292,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFLV",
                        position_code: "LFLV_I_TWR",
                        position_type: "TWR",
                        callsign: "Vichy AFIS",
                        frequency: "121.420",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFLX",
                name: "Chateauroux-Deols Marcel Dassault Airport",
                city: "Chateauroux/Deols",
                state: "Centre",
                lat: 46.8622016907,
                lon: 1.7306699753,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFLX",
                        position_code: "LFLX_TWR",
                        position_type: "TWR",
                        callsign: "Chateauroux Tower",
                        frequency: "125.870",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFLY",
                name: "Lyon-Bron Airport",
                city: "Lyon/Bron",
                state: "Auvergne-Rhone-Alpes",
                lat: 45.7271995544,
                lon: 4.944270134,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFLY",
                        position_code: "LFLY_GND",
                        position_type: "GND",
                        callsign: "Bron Ground",
                        frequency: "121.700",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFLY",
                        position_code: "LFLY_TWR",
                        position_type: "TWR",
                        callsign: "Bron Tower",
                        frequency: "118.100",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFMA",
                name: "Aix-en-Provence (BA 114) Airport",
                city: "Lyon",
                state: "Provence-Alpes-Cote-d'Azur",
                lat: 43.5055999756,
                lon: 5.3677802086,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFMA",
                        position_code: "LFMA_TWR",
                        position_type: "TWR",
                        callsign: "Aix Tower",
                        frequency: "118.750",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFMD",
                name: "Cannes-Mandelieu Airport",
                city: "Cannes/Mandelieu",
                state: "Provence-Alpes-Cote-d'Azur",
                lat: 43.5419998169,
                lon: 6.9534797668,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFMD",
                        position_code: "LFMD_GND",
                        position_type: "GND",
                        callsign: "Mandelieu Ground",
                        frequency: "121.800",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFMD",
                        position_code: "LFMD_TWR",
                        position_type: "TWR",
                        callsign: "Mandelieu Tower",
                        frequency: "118.620",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFMH",
                name: "Saint-Etienne-Boutheon Airport",
                city: "Saint-Etienne/Boutheon",
                state: "Auvergne-Rhone-Alpes",
                lat: 45.540599823,
                lon: 4.2963900566,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFMH",
                        position_code: "LFMH_TWR",
                        position_type: "TWR",
                        callsign: "Saint Etienne Tower",
                        frequency: "119.250",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFMI",
                name: "Istres Le Tube/Istres Air Base (BA 125) Airport",
                city: "Istres/Le Tube",
                state: "Provence-Alpes-Cote-d'Azur",
                lat: 43.5227012634,
                lon: 4.9238400459,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFMI",
                        position_code: "LFMI_TWR",
                        position_type: "TWR",
                        callsign: "Le Tube Tower",
                        frequency: "123.600",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFMK",
                name: "Carcassonne Airport",
                city: "Carcassonne/Salvaza",
                state: "Occitanie",
                lat: 43.2159996033,
                lon: 2.306319952,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFMK",
                        position_code: "LFMK_TWR",
                        position_type: "TWR",
                        callsign: "Carcassonne Tower",
                        frequency: "134.500",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFML",
                name: "Marseille Provence Airport",
                city: "Marseille",
                state: "Provence-Alpes-Cote-d'Azur",
                lat: 43.439271922,
                lon: 5.2214241028,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFML",
                        position_code: "LFML_APP",
                        position_type: "APP",
                        callsign: "Provence Approach",
                        frequency: "120.870",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFML",
                        position_code: "LFML_DEL",
                        position_type: "DEL",
                        callsign: "Provence Delivery",
                        frequency: "121.720",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFML",
                        position_code: "LFML_GND",
                        position_type: "GND",
                        callsign: "Provence Ground",
                        frequency: "121.900",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFML",
                        position_code: "LFML_S_APP",
                        position_type: "APP",
                        callsign: "Provence South Approach",
                        frequency: "132.300",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFML",
                        position_code: "LFML_TWR",
                        position_type: "TWR",
                        callsign: "Provence Tower",
                        frequency: "123.720",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFMN",
                name: "Nice-Cote d'Azur Airport",
                city: "Nice",
                state: "Provence-Alpes-Cote-d'Azur",
                lat: 43.6584014893,
                lon: 7.2158699036,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFMN",
                        position_code: "LFMN_APP",
                        position_type: "APP",
                        callsign: "Nice Approach",
                        frequency: "134.470",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFMN",
                        position_code: "LFMN_DEL",
                        position_type: "DEL",
                        callsign: "Nice Delivery",
                        frequency: "121.770",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFMN",
                        position_code: "LFMN_DEP",
                        position_type: "DEP",
                        callsign: "Nice Departure",
                        frequency: "130.820",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFMN",
                        position_code: "LFMN_E_APP",
                        position_type: "APP",
                        callsign: "Nice Approach",
                        frequency: "124.170",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFMN",
                        position_code: "LFMN_GND",
                        position_type: "GND",
                        callsign: "Nice Ground",
                        frequency: "121.700",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFMN",
                        position_code: "LFMN_TWR",
                        position_type: "TWR",
                        callsign: "Nice Tower",
                        frequency: "118.700",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFMN",
                        position_code: "LFMN_W_APP",
                        position_type: "APP",
                        callsign: "Nice Approach",
                        frequency: "120.850",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    }
                ]
            },
            {
                icao: "LFMO",
                name: "Orange-Caritat (BA 115) Air Base",
                city: "Orange/Caritat",
                state: "Provence-Alpes-Cote-d'Azur",
                lat: 44.140499115,
                lon: 4.8667201996,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFMO",
                        position_code: "LFMO_TWR",
                        position_type: "TWR",
                        callsign: "Orange Tower",
                        frequency: "128.950",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFMP",
                name: "Perpignan-Rivesaltes (Llabanere) Airport",
                city: "Perpignan/Rivesaltes",
                state: "Occitanie",
                lat: 42.740398407,
                lon: 2.8706700802,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFMP",
                        position_code: "LFMP_TWR",
                        position_type: "TWR",
                        callsign: "Perpignan Tower",
                        frequency: "118.300",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFMT",
                name: "Montpellier-Mediterranee Airport",
                city: "Montpellier/Mediterranee",
                state: "Occitanie",
                lat: 43.5761985779,
                lon: 3.9630100727,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFMT",
                        position_code: "LFMT_APP",
                        position_type: "APP",
                        callsign: "Montpellier Approach",
                        frequency: "120.370",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFMT",
                        position_code: "LFMT_GND",
                        position_type: "GND",
                        callsign: "Montpellier Ground",
                        frequency: "121.950",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFMT",
                        position_code: "LFMT_S_APP",
                        position_type: "APP",
                        callsign: "Montpellier Sud Approach",
                        frequency: "130.850",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFMT",
                        position_code: "LFMT_TWR",
                        position_type: "TWR",
                        callsign: "Montpellier Tower",
                        frequency: "118.200",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFMU",
                name: "Beziers-Vias Airport",
                city: "Beziers/Vias",
                state: "Occitanie",
                lat: 43.3235015869,
                lon: 3.3538999557,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFMU",
                        position_code: "LFMU_TWR",
                        position_type: "TWR",
                        callsign: "Beziers Tower",
                        frequency: "120.170",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFMV",
                name: "Avignon-Caumont Airport",
                city: "Avignon/Caumont",
                state: "Provence-Alpes-Cote-d'Azur",
                lat: 43.9072990417,
                lon: 4.9018301964,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFMV",
                        position_code: "LFMV_TWR",
                        position_type: "TWR",
                        callsign: "Avignon Tower",
                        frequency: "122.600",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFTH",
                name: "Toulon-Hyeres Airport",
                city: "Toulon/Hyeres/Le Palyvestre",
                state: "Provence-Alpes-Cote-d'Azur",
                lat: 43.0973014832,
                lon: 6.1460299492,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFTH",
                        position_code: "LFTH_APP",
                        position_type: "APP",
                        callsign: "Toulon Approach",
                        frequency: "126.320",
                        allowed_ratings: ["S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S2"
                    },
                    {
                        icao: "LFTH",
                        position_code: "LFTH_GND",
                        position_type: "GND",
                        callsign: "Palyvestre Ground",
                        frequency: "121.800",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFTH",
                        position_code: "LFTH_TWR",
                        position_type: "TWR",
                        callsign: "Palyvestre Tower",
                        frequency: "121.020",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            },
            {
                icao: "LFTW",
                name: "Nimes-Arles-Camargue Airport",
                city: "Nimes/Garons",
                state: "Occitanie",
                lat: 43.7574005127,
                lon: 4.4163498878,
                atis: "129.350",
                positions: [
                    {
                        icao: "LFTW",
                        position_code: "LFTW_GND",
                        position_type: "GND",
                        callsign: "Garons Ground",
                        frequency: "121.800",
                        allowed_ratings: ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    },
                    {
                        icao: "LFTW",
                        position_code: "LFTW_TWR",
                        position_type: "TWR",
                        callsign: "Garons Tower",
                        frequency: "123.200",
                        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
                        solo_rating: "S1"
                    }
                ]
            }
        ],
        centres: [
            {
                icao: "LFMM",
                position_code: "LFMM_CTR",
                position_type: "CTR",
                callsign: "Marseille Control",
                frequency: "124.650",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: "S3"
            },
            {
                icao: "LFMM",
                position_code: "LFMM_E_CTR",
                position_type: "CTR",
                callsign: "Marseille Control",
                frequency: "128.320",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: "S3"
            },
            {
                icao: "LFMM",
                position_code: "LFMM_N_CTR",
                position_type: "CTR",
                callsign: "Marseille Control",
                frequency: "129.250",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: "S3"
            },
            {
                icao: "LFMM",
                position_code: "LFMM_W_CTR",
                position_type: "CTR",
                callsign: "Marseille Control",
                frequency: "125.650",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: "S3"
            }
        ]
    },
    {
        code: "Other",
        name: "Special",
        airports: [],
        centres: [
            {
                icao: "EUWN",
                position_code: "EURW-N_CTR",
                position_type: "CTR",
                callsign: "Eurocontrol West",
                frequency: "UNKNOWN",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: ""
            },
            {
                icao: "LFFM",
                position_code: "LFFM_CTR",
                position_type: "CTR",
                callsign: "France Military Control",
                frequency: "128.370",
                allowed_ratings: ["C1", "C3", "I1", "I3"],
                solo_rating: ""
            }
        ]
    },
];

const stationData = require('./data.json');

const allowed_rating_schema = 
{
    "DEL": ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
    "GND": ["S1", "S2", "S3", "C1", "C3", "I1", "I3"],
    "TWR": ["S2", "S3", "C1", "C3", "I1", "I3"],
    "APP": ["S3", "C1", "C3", "I1", "I3"],
    "DEP": ["S3", "C1", "C3", "I1", "I3"],
    "CTR": ["C1", "C3", "I1", "I3"]
};

for(x in VaccAtcPositions) {
    for (y in VaccAtcPositions[x].airports) {

        /*
        icao: "LFAQ",
        position_code: "LFAQ_TWR",
        position_type: "TWR",
        callsign: "Albert-Bray Tower",
        frequency: "119.650",
        allowed_ratings: ["S2", "S3", "C1", "C3", "I1", "I3"],
        solo_rating: "S1"

        // {"code": "LFAQ_TWR", "frequency": "119.650", "callsign": "Albert-Bray Tower", "rank": "S2", "solo_rank": "S1"}
        */

        var actualData = stationData.filter(obj => obj.icao == VaccAtcPositions[x].airports[y].icao);

        if (actualData.length != 1)
            continue;
        
        actualData = actualData[0];

        VaccAtcPositions[x].airports[y].positions = [];

        for (z in actualData.positions) {
            var pos_type = actualData.positions[z].code.split("_").at(-1);

            VaccAtcPositions[x].airports[y].positions.push({
                icao: actualData.icao,
                position_code: actualData.positions[z].code,
                callsign: actualData.positions[z].callsign,
                frequency: actualData.positions[z].frequency,
                solo_rating: actualData.positions[z].solo_rank,
                position_type: pos_type,
                allowed_ratings: allowed_rating_schema[pos_type]
            });
        }        
    }
}

console.log(JSON.stringify(VaccAtcPositions));