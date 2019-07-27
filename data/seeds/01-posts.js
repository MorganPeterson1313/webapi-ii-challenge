exports.seed = function(knex, Promise) {
  return knex('posts')
    .truncate()
    .then(function() {
      return knex('posts').insert([
        {
          title:
            'I wish the ring had never come to me. I wish none of this had happened.',
          contents: 'Guess who said this',
          thumbnailUrl:'',
          imageUrl:'',
          likes: 400,
        },
        {
          title: 'I think we should get off the road. Get off the road! Quick!',
          contents: 'Guess who said this',
          thumbnailUrl:'',
          imageUrl:'',
          likes: 300,
        },
        {
          title:
            "I made a promise, Mr Frodo. A promise. \"Don't you leave him Samwise Gamgee.\" And I don't mean to. I don't mean to.",
          contents: 'Guess who said this',
          thumbnailUrl:'',
          imageUrl:'',
          likes: 200,
        },
        {
          title:
            " N-nothing important. That is, I heard a great deal about a ring, a Dark Lord, and something about the end of the world, but... Please, Mr. Gandalf, sir, don't hurt me. Don't turn me into anything... unnatural.",
          contents: 'Guess who said this',
          thumbnailUrl:'',
          imageUrl:'',
          likes: 500,
        },
        {
          title:
            'You need people of intelligence on this sort of mission...quest...thing.',
          contents: 'Guess who said this',
          thumbnailUrl:'',
          imageUrl:'',
          likes: 80,
        },
        {
          title:
            'All you have to do is decide what to do with the time that is given to you.',
          contents: 'Guess who said this',
          thumbnailUrl:'',
          imageUrl:'',
          likes: 700,
        },
        {
          title:
            'Do not be so quick to deal out death and judgement. Even the very wise do not see all ends.',
          contents: 'Guess who said this',
          thumbnailUrl:'',
          imageUrl:'',
          likes: 800,
        },
        {
          title:
            ' Fool of a Took! Throw yourself in next time and rid us of your stupidity!',
          contents: 'Guess who said this',
          thumbnailUrl:'',
          imageUrl:'',
          likes: 200,
        },
        {
          title:
            'I will be dead before I see the ring in the hands of an elf! Never trust an elf!',
          contents: 'Guess who said this',
          thumbnailUrl:'',
          imageUrl:'',
          likes: 400,
        },
      ]);
    });
};
