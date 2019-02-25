var movies = [

    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju.',
        img: 'images/harry-potter.jpg'

    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny.',
        img: 'images/krol-lew.jpg'
    },
    {
        id: 3,
        title: 'Miasto Boga',
        desc: 'Film o gangach narkotykowych w Brazylii w Rio de Janeiro.',
        img: 'images/miasto-boga.jpg'
    },
    {
        id: 4,
        title: 'Labirynt Fauna',
        desc: 'Film o Hiszpanii w okresie panowania gen.Franco.',
        img: 'images/labirynt-fauna.jpg'

    },
    {
        id: 5,
        title: 'Biała wstążka',
        desc: 'Film o niemieckiej wsi na prowincji w okresie krótko przed wybuchem I wojny światowej.',
        img: 'images/biala-wstazka.jpg'
    }
];

var moviesElements = movies.map(function (movie) {
    return React.createElement('li', {
            key: movie.id
        },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {
            src: movie.img
        })
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));