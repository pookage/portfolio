import {
	alwaysCreateMicroInteractions,
	flippingCardsPerspective,
	goldenRatioCSS,
	intersectionObserverStorytelling,
	cascadingTextEffect,
	lazyLoadEverything,
	everydayGyroscopeUses,
	accessibleCodeIsEasier,
	moreInterestingGalleries,
	webARSnapchat,
	transparentVideosCanvas,
	clipPathEffectsFilesize
} from "Data/articles.js";

export const projects = [
	{
		title: "The Handmaiden",
		safeTitle: "the-handmaiden",
		date: "2016-08",
		description: [
			"A companion site for Park Chan-Wook's 2016 film of the same name, with heavy emphasis placed on its artwork matching aesthetic.",
			"Winner of the 'Best Online Campaign of the Year' Screen Award, 2017."
		],
		images: {
			desktop: [
				{
					src: "Assets/composites/the-handmaiden/desktop/home__01.jpg",
					description: "",
					id: "the_handmaiden__desktop__landing"
				}, {
					src: "Assets/composites/the-handmaiden/desktop/home__02.jpg",
					description: "",
					id: "the_handmaiden__desktop__synopsis"
				}, {
					src: "Assets/composites/the-handmaiden/desktop/home__03.jpg",
					description: "",
					id: "the_handmaiden__desktop__gallery"
				}, {
					src: "Assets/composites/the-handmaiden/desktop/home__04.jpg",
					description: "",
					id: "the_handmaiden__desktop__characters"
				}, {
					src: "Assets/composites/the-handmaiden/desktop/home__05.jpg",
					description: "",
					id: "the_handmaiden__desktop__read_more"
				}, {
					src: "Assets/composites/the-handmaiden/desktop/home__06.jpg",
					description: "",
					id: "the_handmaiden__desktop__trailer"
				}, {
					src: "Assets/composites/the-handmaiden/desktop/biography.jpg",
					description: "",
					id: "the_handmaiden__desktop__biography"
				}, {
					src: "Assets/composites/the-handmaiden/desktop/filmography.jpg",
					description: "",
					id: "the_handmaiden__desktop__filmography"
				}, {
					src: "Assets/composites/the-handmaiden/desktop/novel.jpg",
					description: "",
					id: "the_handmaiden__desktop__novel"
				}, 
			],
			tablet: [
				{
					src: "Assets/composites/the-handmaiden/tablet/home__01.jpg",
					description: "",
					id: "the_handmaiden__tablet__landing"
				}, {
					src: "Assets/composites/the-handmaiden/tablet/home__02.jpg",
					description: "",
					id: "the_handmaiden__tablet__synopsis"
				}, {
					src: "Assets/composites/the-handmaiden/tablet/home__03.jpg",
					description: "",
					id: "the_handmaiden__tablet__gallery"
				}, {
					src: "Assets/composites/the-handmaiden/tablet/home__04.jpg",
					description: "",
					id: "the_handmaiden__tablet__characters"
				}, {
					src: "Assets/composites/the-handmaiden/tablet/home__05.jpg",
					description: "",
					id: "the_handmaiden__tablet__read_more"
				}, {
					src: "Assets/composites/the-handmaiden/tablet/home__06.jpg",
					description: "",
					id: "the_handmaiden__tablet__trailer"
				}, {
					src: "Assets/composites/the-handmaiden/tablet/biography.jpg",
					description: "",
					id: "the_handmaiden__tablet__biography"
				}, {
					src: "Assets/composites/the-handmaiden/tablet/filmography.jpg",
					description: "",
					id: "the_handmaiden__tablet__filmography"
				}, {
					src: "Assets/composites/the-handmaiden/tablet/novel.jpg",
					description: "",
					id: "the_handmaiden__tablet__novel"
				}
			],
			mobile: [
				{
					src: "Assets/composites/the-handmaiden/mobile/home__01.jpg",
					description: "",
					id: "the_handmaiden__mobile__landing"
				}, {
					src: "Assets/composites/the-handmaiden/mobile/home__02.jpg",
					description: "",
					id: "the_handmaiden__mobile__synopsis"
				}, {
					src: "Assets/composites/the-handmaiden/mobile/home__03.jpg",
					description: "",
					id: "the_handmaiden__mobile__gallery"
				}, {
					src: "Assets/composites/the-handmaiden/mobile/home__04.jpg",
					description: "",
					id: "the_handmaiden__mobile__characters"
				}, {
					src: "Assets/composites/the-handmaiden/mobile/home__05.jpg",
					description: "",
					id: "the_handmaiden__mobile__read_more"
				}, {
					src: "Assets/composites/the-handmaiden/mobile/home__06.jpg",
					description: "",
					id: "the_handmaiden__mobile__trailer"
				}, {
					src: "Assets/composites/the-handmaiden/mobile/biography.jpg",
					description: "",
					id: "the_handmaiden__mobile__biography"
				}, {
					src: "Assets/composites/the-handmaiden/mobile/filmography.jpg",
					description: "",
					id: "the_handmaiden__mobile__filmography"
				}, {
					src: "Assets/composites/the-handmaiden/mobile/novel.jpg",
					description: "",
					id: "the_handmaiden__mobile__novel"
				}
			],
		},
		pages: [ 
			"Landing", 
			"Synopsis", 
			"Gallery", 
			"Characters", 
			"Further", 
			"Trailer", 
			"Biography", 
			"Filmography", 
			"Novel" 
		],
		tags: [
			"HTML",
			"CSS3",
			"ES6",
			"Preact"
		],
		articles: [
			alwaysCreateMicroInteractions
		]
	},{
		title: "Alien Covenant",
		safeTitle: "alien-covenant",
		date: "2017-05",
		description: [
			"A hub site for promotional materials related to the UK-release of Ridley Scott's Alien Covenant."
		],
		images: {
			desktop: [
				{
					src: "Assets/composites/alien-covenant/desktop/home.jpg",
					description: "",
					id: "alien_covenant__desktop__home"
				},{
					src: "Assets/composites/alien-covenant/desktop/synopsis.jpg",
					description: "",
					id: "alien_covenant__desktop__synopsis"
				}
			],
			tablet: [
				{
					src: "Assets/composites/alien-covenant/tablet/home.jpg",
					description: "",
					id: "alien_covenant__tablet__home"
				},{
					src: "Assets/composites/alien-covenant/tablet/synopsis.jpg",
					description: "",
					id: "alien_covenant__tablet__synopsis"
				}
			],
			mobile: [
				{
					src: "Assets/composites/alien-covenant/mobile/home.jpg",
					description: "",
					id: "alien_covenant__device__home"
				},{
					src: "Assets/composites/alien-covenant/mobile/synopsis.jpg",
					description: "",
					id: "alien_covenant__device__synopsis"
				}
			],
		},
		pages: [ 
			"Home",
			"Synopsis"
		],
		tags: [
			"HTML",
			"CSS3",
			"ES6",
			"Preact"
		]
	},{
		title: "Blindspotting",
		safeTitle: "blindspotting",
		date: "2018-07",
		description: [
			"A media-showcase to introduce the characters and artwork from the 2017 film Blindspotting."
		],
		images: {
			desktop: [
				{
					src: "Assets/composites/blindspotting/desktop/home__01.jpg",
					description: "",
					id: "blindspotting__desktop__landing"
				},{
					src: "Assets/composites/blindspotting/desktop/home__02.jpg",
					description: "",
					id: "blindspotting__desktop__posters"
				},{
					src: "Assets/composites/blindspotting/desktop/home__03.jpg",
					description: "",
					id: "blindspotting__desktop__gallery"
				},{
					src: "Assets/composites/blindspotting/desktop/home__04.jpg",
					description: "",
					id: "blindspotting__desktop__cards"
				},{
					src: "Assets/composites/blindspotting/desktop/home__05.jpg",
					description: "",
					id: "blindspotting__desktop__artwork"
				},{
					src: "Assets/composites/blindspotting/desktop/home__06.jpg",
					description: "",
					id: "blindspotting__desktop__trailer"
				}
			],
			tablet: [
				{
					src: "Assets/composites/blindspotting/tablet/home__01.jpg",
					description: "",
					id: "blindspotting__tablet__landing"
				},{
					src: "Assets/composites/blindspotting/tablet/home__02.jpg",
					description: "",
					id: "blindspotting__tablet__posters"
				},{
					src: "Assets/composites/blindspotting/tablet/home__03.jpg",
					description: "",
					id: "blindspotting__tablet__gallery"
				},{
					src: "Assets/composites/blindspotting/tablet/home__04.jpg",
					description: "",
					id: "blindspotting__tablet__cards"
				},{
					src: "Assets/composites/blindspotting/tablet/home__05.jpg",
					description: "",
					id: "blindspotting__tablet__artwork"
				},{
					src: "Assets/composites/blindspotting/tablet/home__06.jpg",
					description: "",
					id: "blindspotting__tablet__trailer"
				}
			],
			mobile: [
				{
					src: "Assets/composites/blindspotting/mobile/home__01.jpg",
					description: "",
					id: "blindspotting__mobile__landing"
				},{
					src: "Assets/composites/blindspotting/mobile/home__02.jpg",
					description: "",
					id: "blindspotting__mobile__posters"
				},{
					src: "Assets/composites/blindspotting/mobile/home__03.jpg",
					description: "",
					id: "blindspotting__mobile__gallery"
				},{
					src: "Assets/composites/blindspotting/mobile/home__04.jpg",
					description: "",
					id: "blindspotting__mobile__cards"
				},{
					src: "Assets/composites/blindspotting/mobile/home__05.jpg",
					description: "",
					id: "blindspotting__mobile__artwork"
				},{
					src: "Assets/composites/blindspotting/mobile/home__06.jpg",
					description: "",
					id: "blindspotting__mobile__trailer"
				}
			],
		},
		pages: [ 
			"Landing",
			"Posters",
			"Gallery",
			"Cards",
			"Artwork",
			"Trailer"
		],
		tags: [
			"HTML",
			"CSS3",
			"ES6",
			"Preact"
		],
		articles: [
			flippingCardsPerspective,
			goldenRatioCSS
		]
	},{
		title: "Fifty Shades Darker",
		safeTitle: "fifty-shades-darker",
		date: "2017-02",
		description: [
			"A desktop-only teaser site for the 2017 film of the same name."
		],
		images: {
			desktop: [
				{
					src: "Assets/composites/fifty-shades-darker/desktop/home__01.jpg",
					description: "",
					id: "fifty_shades_darker__desktop__landing"
				},{
					src: "Assets/composites/fifty-shades-darker/desktop/home__02.jpg",
					description: "",
					id: "fifty_shades_darker__desktop__clip_1"
				},{
					src: "Assets/composites/fifty-shades-darker/desktop/home__03.jpg",
					description: "",
					id: "fifty_shades_darker__desktop__clip_2"
				},{
					src: "Assets/composites/fifty-shades-darker/desktop/home__04.jpg",
					description: "",
					id: "fifty_shades_darker__desktop__gallery"
				},{
					src: "Assets/composites/fifty-shades-darker/desktop/home__05.jpg",
					description: "",
					id: "fifty_shades_darker__desktop__clip_3"
				},{
					src: "Assets/composites/fifty-shades-darker/desktop/home__06.jpg",
					description: "",
					id: "fifty_shades_darker__desktop__tickets"
				}
			]
		},
		pages: [ 
			"Landing",
			"Clip 1",
			"Clip 2",
			"Gallery",
			"Clip 3",
			"Tickets"
		],
		tags: [
			"HTML",
			"CSS3",
			"ES6",
			"Preact"
		],
		articles: [
			cascadingTextEffect,
			intersectionObserverStorytelling
		]
	},{
		title: "Get Out Artbook",
		safeTitle: "get-out-artbook",
		date: "2017-09",
		description: [
			"A site to showcase the artwork and artists commissioned for the Art Book to Jordan Peele's 2017 film 'Get Out'."
		],
		images: {
			desktop: [
				{
					src: "Assets/composites/get-out/desktop/home__01.jpg",
					description: "",
					id: "get_out__desktop__landing"
				},{
					src: "Assets/composites/get-out/desktop/home__02.jpg",
					description: "",
					id: "get_out__desktop__foreword"
				},{
					src: "Assets/composites/get-out/desktop/home__03.jpg",
					description: "",
					id: "get_out__desktop__gallery_1"
				},{
					src: "Assets/composites/get-out/desktop/home__04.jpg",
					description: "",
					id: "get_out__desktop__artwork__skull"
				},{
					src: "Assets/composites/get-out/desktop/home__05.jpg",
					description: "",
					id: "get_out__desktop__artwork__yellow_teacup"
				},{
					src: "Assets/composites/get-out/desktop/home__06.jpg",
					description: "",
					id: "get_out__desktop__artwork__red_waves"
				},{
					src: "Assets/composites/get-out/desktop/home__07.jpg",
					description: "",
					id: "get_out__desktop__artwork__gallery_2"
				},{
					src: "Assets/composites/get-out/desktop/home__08.jpg",
					description: "",
					id: "get_out__desktop__artwork__teacup_light"
				},{
					src: "Assets/composites/get-out/desktop/home__09.jpg",
					description: "",
					id: "get_out__desktop__artwork__thanks"
				}
			],
			tablet: [
				{
					src: "Assets/composites/get-out/tablet/home__01.jpg",
					description: "",
					id: "get_out__tablet__landing"
				},{
					src: "Assets/composites/get-out/tablet/home__02.jpg",
					description: "",
					id: "get_out__tablet__foreword"
				},{
					src: "Assets/composites/get-out/tablet/home__03.jpg",
					description: "",
					id: "get_out__tablet__gallery_1"
				},{
					src: "Assets/composites/get-out/tablet/home__04.jpg",
					description: "",
					id: "get_out__tablet__artwork__skull"
				},{
					src: "Assets/composites/get-out/tablet/home__05.jpg",
					description: "",
					id: "get_out__tablet__artwork__yellow_teacup"
				},{
					src: "Assets/composites/get-out/tablet/home__06.jpg",
					description: "",
					id: "get_out__tablet__artwork__red_waves"
				},{
					src: "Assets/composites/get-out/tablet/home__07.jpg",
					description: "",
					id: "get_out__tablet__artwork__gallery_2"
				},{
					src: "Assets/composites/get-out/tablet/home__08.jpg",
					description: "",
					id: "get_out__tablet__artwork__teacup_light"
				},{
					src: "Assets/composites/get-out/tablet/home__09.jpg",
					description: "",
					id: "get_out__tablet__artwork__thanks"
				}
			],
			mobile: [
				{
					src: "Assets/composites/get-out/mobile/home__01.jpg",
					description: "",
					id: "get_out__mobile__landing"
				},{
					src: "Assets/composites/get-out/mobile/home__02.jpg",
					description: "",
					id: "get_out__mobile__foreword"
				},{
					src: "Assets/composites/get-out/mobile/home__03.jpg",
					description: "",
					id: "get_out__mobile__gallery_1"
				},{
					src: "Assets/composites/get-out/mobile/home__04.jpg",
					description: "",
					id: "get_out__mobile__artwork__skull"
				},{
					src: "Assets/composites/get-out/mobile/home__05.jpg",
					description: "",
					id: "get_out__mobile__artwork__yellow_teacup"
				},{
					src: "Assets/composites/get-out/mobile/home__06.jpg",
					description: "",
					id: "get_out__mobile__artwork__red_waves"
				},{
					src: "Assets/composites/get-out/mobile/home__07.jpg",
					description: "",
					id: "get_out__mobile__artwork__gallery_2"
				},{
					src: "Assets/composites/get-out/mobile/home__08.jpg",
					description: "",
					id: "get_out__mobile__artwork__teacup_light"
				},{
					src: "Assets/composites/get-out/mobile/home__09.jpg",
					description: "",
					id: "get_out__mobile__artwork__thanks"
				}
			],
		},
		pages: [ 
			"Landing",
			"Foreword",
			"Gallery 1",
			"Artwork 1",
			"Artwork 2",
			"Artwork 3",
			"Gallery 2",
			"Artwork 4",
			"Thank you"
		],
		tags: [
			"HTML",
			"CSS3",
			"ES6",
			"Preact"
		],
		articles: [
			lazyLoadEverything
		]
	},{
		title: "Hell Fest",
		safeTitle: "hell-fest",
		date: "2018-09",
		description: [
			"A map / exploration-based media site to share clips and stills from the 2018 horror flick: Hell Fest."
		],
		images: {
			desktop: [
				{
					src: "Assets/composites/hell-fest/desktop/map.jpg",
					description: "",
					id: "hell_fest__desktop__map"
				},{
					src: "Assets/composites/hell-fest/desktop/gallery.jpg",
					description: "",
					id: "hell_fest__desktop__gallery"
				},{
					src: "Assets/composites/hell-fest/desktop/synopsis.jpg",
					description: "",
					id: "hell_fest__desktop__synopsis"
				},{
					src: "Assets/composites/hell-fest/desktop/cast.jpg",
					description: "",
					id: "hell_fest__desktop__cast"
				}
			],
			tablet: [
				{
					src: "Assets/composites/hell-fest/tablet/map.jpg",
					description: "",
					id: "hell_fest__tablet__map"
				},{
					src: "Assets/composites/hell-fest/tablet/gallery.jpg",
					description: "",
					id: "hell_fest__tablet__gallery"
				},{
					src: "Assets/composites/hell-fest/tablet/synopsis.jpg",
					description: "",
					id: "hell_fest__tablet__synopsis"
				},{
					src: "Assets/composites/hell-fest/tablet/cast.jpg",
					description: "",
					id: "hell_fest__tablet__cast"
				}
			],
			mobile: [
				{
					src: "Assets/composites/hell-fest/mobile/map.jpg",
					description: "",
					id: "hell_fest__mobile__map"
				},{
					src: "Assets/composites/hell-fest/mobile/gallery.jpg",
					description: "",
					id: "hell_fest__mobile__gallery"
				},{
					src: "Assets/composites/hell-fest/mobile/synopsis.jpg",
					description: "",
					id: "hell_fest__mobile__synopsis"
				},{
					src: "Assets/composites/hell-fest/mobile/cast.jpg",
					description: "",
					id: "hell_fest__mobile__cast"
				}
			],
		},
		pages: [ 
			"Map",
			"Gallery",
			"Synopsis",
			"Cast"
		],
		tags: [
			"HTML",
			"CSS3",
			"ES6",
			"Preact",
			"Gyroscope"
		],
		articles: [
			everydayGyroscopeUses,
			accessibleCodeIsEasier 
		]
	},	{
		title: "Life Itself",
		safeTitle: "life-itself",
		date: "2018-09",
		description: [
			"A media-rich promotional site for the 2018 film: Life Itself."
		],
		images: {
			desktop: [
				{
					src: "Assets/composites/life-itself/desktop/landing.jpg",
					description: "",
					id: "life_itself__desktop__landing"
				},{
					src: "Assets/composites/life-itself/desktop/synopsis.jpg",
					description: "",
					id: "life_itself__desktop__synopsis"
				},{
					src: "Assets/composites/life-itself/desktop/characters.jpg",
					description: "",
					id: "life_itself__desktop__characters"
				},{
					src: "Assets/composites/life-itself/desktop/posters.jpg",
					description: "",
					id: "life_itself__desktop__posters"
				},{
					src: "Assets/composites/life-itself/desktop/gallery.jpg",
					description: "",
					id: "life_itself__desktop__gallery"
				}
			],
			tablet: [
				{
					src: "Assets/composites/life-itself/tablet/landing.jpg",
					description: "",
					id: "life_itself__tablet__landing"
				},{
					src: "Assets/composites/life-itself/tablet/synopsis.jpg",
					description: "",
					id: "life_itself__tablet__synopsis"
				},{
					src: "Assets/composites/life-itself/tablet/characters.jpg",
					description: "",
					id: "life_itself__tablet__characters"
				},{
					src: "Assets/composites/life-itself/tablet/posters.jpg",
					description: "",
					id: "life_itself__tablet__posters"
				},{
					src: "Assets/composites/life-itself/tablet/gallery.jpg",
					description: "",
					id: "life_itself__tablet__gallery"
				}
			],
			mobile: [
				{
					src: "Assets/composites/life-itself/mobile/landing.jpg",
					description: "",
					id: "life_itself__mobile__landing"
				},{
					src: "Assets/composites/life-itself/mobile/synopsis.jpg",
					description: "",
					id: "life_itself__mobile__synopsis"
				},{
					src: "Assets/composites/life-itself/mobile/characters.jpg",
					description: "",
					id: "life_itself__mobile__characters"
				},{
					src: "Assets/composites/life-itself/mobile/posters.jpg",
					description: "",
					id: "life_itself__mobile__posters"
				},{
					src: "Assets/composites/life-itself/mobile/gallery.jpg",
					description: "",
					id: "life_itself__mobile__gallery"
				}
			],
		},
		pages: [ 
			"Landing",
			"Synopsis",
			"Characters",
			"Posters",
			"Gallery"
		],
		tags: [
			"HTML",
			"CSS3",
			"ES6",
			"Preact"
		],
		articles: [
			moreInterestingGalleries
		]
	},	{
		title: "Son of Bigfoot",
		safeTitle: "son-of-bigfoot",
		date: "2017-06",
		description: [
			"A facial-recognition-powered AR quiz, in which your face (from webcam or file-upload) becomes more hairy for each question that you answer correctly."
		],
		images: {
			desktop: [
				{
					src: "Assets/composites/son-of-bigfoot/desktop/landing.jpg",
					description: "",
					id: "son_of_bigfoot__desktop__landing"
				},{
					src: "Assets/composites/son-of-bigfoot/desktop/cta.jpg",
					description: "",
					id: "son_of_bigfoot__desktop__cta"
				},{
					src: "Assets/composites/son-of-bigfoot/desktop/confirmation.jpg",
					description: "",
					id: "son_of_bigfoot__desktop__confirmation"
				},{
					src: "Assets/composites/son-of-bigfoot/desktop/question.jpg",
					description: "",
					id: "son_of_bigfoot__desktop__question"
				},{
					src: "Assets/composites/son-of-bigfoot/desktop/result.jpg",
					description: "",
					id: "son_of_bigfoot__desktop__result"
				}
			],
			tablet: [
				{
					src: "Assets/composites/son-of-bigfoot/tablet/landing.jpg",
					description: "",
					id: "son_of_bigfoot__tablet__landing"
				},{
					src: "Assets/composites/son-of-bigfoot/tablet/cta.jpg",
					description: "",
					id: "son_of_bigfoot__tablet__cta"
				},{
					src: "Assets/composites/son-of-bigfoot/tablet/confirmation.jpg",
					description: "",
					id: "son_of_bigfoot__tablet__confirmation"
				},{
					src: "Assets/composites/son-of-bigfoot/tablet/question.jpg",
					description: "",
					id: "son_of_bigfoot__tablet__question"
				},{
					src: "Assets/composites/son-of-bigfoot/tablet/result.jpg",
					description: "",
					id: "son_of_bigfoot__tablet__result"
				}
			],
			mobile: [
				{
					src: "Assets/composites/son-of-bigfoot/mobile/landing.jpg",
					description: "",
					id: "son_of_bigfoot__mobile__landing"
				},{
					src: "Assets/composites/son-of-bigfoot/mobile/cta.jpg",
					description: "",
					id: "son_of_bigfoot__mobile__cta"
				},{
					src: "Assets/composites/son-of-bigfoot/mobile/confirmation.jpg",
					description: "",
					id: "son_of_bigfoot__mobile__confirmation"
				},{
					src: "Assets/composites/son-of-bigfoot/mobile/question.jpg",
					description: "",
					id: "son_of_bigfoot__mobile__question"
				},{
					src: "Assets/composites/son-of-bigfoot/mobile/result.jpg",
					description: "",
					id: "son_of_bigfoot__mobile__question"
				}
			],
		},
		pages: [ 
			"Landing",
			"Prompt",
			"Confirmation",
			"Quiz",
			"Result"
		],
		tags: [
			"HTML",
			"CSS3",
			"ES6",
			"Preact",
			"AR",
			"clmtrackr"
		],
		articles: [
			webARSnapchat
		]
	},	{
		title: "Suspiria",
		safeTitle: "suspiria",
		date: "2018-11",
		description: [
			"A media-rich promotional site for Luca Guadagnino's 2018 remake of Suspiria."
		],
		images: {
			desktop: [
				{
					src: "Assets/composites/suspiria/desktop/home__01.jpg",
					description: "",
					id: "suspiria__desktop__landing"
				},{
					src: "Assets/composites/suspiria/desktop/home__02.jpg",
					description: "",
					id: "suspiria__desktop__tanz"
				},{
					src: "Assets/composites/suspiria/desktop/home__03.jpg",
					description: "",
					id: "suspiria__desktop__mother"
				},{
					src: "Assets/composites/suspiria/desktop/home__04.jpg",
					description: "",
					id: "suspiria__desktop__reviews"
				},{
					src: "Assets/composites/suspiria/desktop/legends__landing.jpg",
					description: "",
					id: "suspiria__desktop__legends_closed"
				},{
					src: "Assets/composites/suspiria/desktop/legends__gallery.jpg",
					description: "",
					id: "suspiria__desktop__legends_open"
				},{
					src: "Assets/composites/suspiria/desktop/whispers.jpg",
					description: "",
					id: "suspiria__desktop__soundtrack"
				},{
					src: "Assets/composites/suspiria/desktop/videos.jpg",
					description: "",
					id: "suspiria__desktop__videos"
				}
			],
			tablet: [
				{
					src: "Assets/composites/suspiria/tablet/home__01.jpg",
					description: "",
					id: "suspiria__tablet__landing"
				},{
					src: "Assets/composites/suspiria/tablet/home__02.jpg",
					description: "",
					id: "suspiria__tablet__tanz"
				},{
					src: "Assets/composites/suspiria/tablet/home__03.jpg",
					description: "",
					id: "suspiria__tablet__mother"
				},{
					src: "Assets/composites/suspiria/tablet/home__04.jpg",
					description: "",
					id: "suspiria__tablet__reviews"
				},{
					src: "Assets/composites/suspiria/tablet/legends__landing.jpg",
					description: "",
					id: "suspiria__tablet__legends_closed"
				},{
					src: "Assets/composites/suspiria/tablet/legends__gallery.jpg",
					description: "",
					id: "suspiria__tablet__legends_open"
				},{
					src: "Assets/composites/suspiria/tablet/whispers.jpg",
					description: "",
					id: "suspiria__tablet__soundtrack"
				},{
					src: "Assets/composites/suspiria/tablet/videos.jpg",
					description: "",
					id: "suspiria__tablet__videos"
				}
			],
			mobile: [
				{
					src: "Assets/composites/suspiria/mobile/home__01.jpg",
					description: "",
					id: "suspiria__mobile__landing"
				},{
					src: "Assets/composites/suspiria/mobile/home__02.jpg",
					description: "",
					id: "suspiria__mobile__tanz"
				},{
					src: "Assets/composites/suspiria/mobile/home__03.jpg",
					description: "",
					id: "suspiria__mobile__mother"
				},{
					src: "Assets/composites/suspiria/mobile/home__04.jpg",
					description: "",
					id: "suspiria__mobile__reviews"
				},{
					src: "Assets/composites/suspiria/mobile/legends__landing.jpg",
					description: "",
					id: "suspiria__mobile__legends_closed"
				},{
					src: "Assets/composites/suspiria/mobile/legends__gallery.jpg",
					description: "",
					id: "suspiria__mobile__legends_open"
				},{
					src: "Assets/composites/suspiria/mobile/whispers.jpg",
					description: "",
					id: "suspiria__mobile__soundtrack"
				},{
					src: "Assets/composites/suspiria/mobile/videos.jpg",
					description: "",
					id: "suspiria__mobile__videos"
				}
			],
		},
		pages: [ 
			"Landing",
			"Summary",
			"The Mothers",
			"Reviews",
			"Gallery Selection",
			"Gallery",
			"Soundtrack",
			"Videos"
		],
		tags: [
			"HTML",
			"CSS3",
			"ES6",
			"Preact"
		],
		articles: [
			transparentVideosCanvas, 
			clipPathEffectsFilesize,
			alwaysCreateMicroInteractions,
			everydayGyroscopeUses,
			accessibleCodeIsEasier,
			moreInterestingGalleries
		]
	},	{
		title: "The Secret Life of Pets 2",
		safeTitle: "the-secret-life-of-pets-2",
		date: "2018-11",
		description: [
			"A hub-site to reveal characters from SLOP2 and their associated Youtube videos over the course of several months."
		],
		images: {
			desktop: [
				{
					src: "Assets/composites/the-secret-life-of-pets-2/desktop/roof.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__desktop__roof"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/desktop/max.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__desktop__max"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/desktop/chloe.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__desktop__chloe"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/desktop/daisy.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__desktop__daisy"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/desktop/snowball.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__desktop__snowball"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/desktop/gidget.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__desktop__gidget"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/desktop/rooster.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__desktop__rooster"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/desktop/shop.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__desktop__shop"
				}
			],
			tablet: [
				{
					src: "Assets/composites/the-secret-life-of-pets-2/tablet/roof.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__tablet__roof"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/tablet/max.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__tablet__max"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/tablet/chloe.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__tablet__chloe"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/tablet/daisy.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__tablet__daisy"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/tablet/snowball.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__tablet__snowball"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/tablet/gidget.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__tablet__gidget"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/tablet/rooster.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__tablet__rooster"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/tablet/shop.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__tablet__shop"
				}
			],
			mobile: [
				{
					src: "Assets/composites/the-secret-life-of-pets-2/mobile/roof.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__mobile__roof"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/mobile/max.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__mobile__max"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/mobile/chloe.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__mobile__chloe"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/mobile/daisy.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__mobile__daisy"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/mobile/snowball.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__mobile__snowball"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/mobile/gidget.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__mobile__gidget"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/mobile/rooster.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__mobile__rooster"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/mobile/shop.jpg",
					description: "",
					id: "the_secret_life_of_pets_2__mobile__shop"
				}
			],
		},
		pages: [ 
			"Rooftop",
			"Max",
			"Chloe",
			"Daisy",
			"snowball",
			"Gidget",
			"Rooster"
		],
		tags: [
			"HTML",
			"CSS3",
			"ES6",
			"Preact"
		],
		articles: [
			everydayGyroscopeUses
		]
	}
];