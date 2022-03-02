const seller = [
    {
        name: 'Brian Armstrong',
        uid:"0",
        walletAddress:"bc1qdwhf5kha0hy4nak2cc5n6fjq20zmag02tk5pln",
        privateKey:"L3KuSGg1JQfnUUNWWfLd7VFSumiPrepeJA5eyduzQ5DUL9Asfej3",
        transactionDescription:"You can pay me with All payment both Bank Transfer and Credit/Debit Card which can process on US.",
        image:
        'data:image/jpeg;base64,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',
        transactionHistory:{
          complete:99.8,
        },
    },
    {
        name: 'CZ Binance',
        uid:"1",
        walletAddress:"bc1qe4r4ktxlk92szjw6lmcyv9wfg7c2xmzmj7th7p",
        privateKey:"L24DxzsxRvWGCdRsGBZPfk3EHHr1MgXMSahuPQStQqGgroYjcSgt",
        transactionDescription:"You can pay me with All payment both Bank Transfer and Credit/Debit Card which can process on US.",
        image:
        'https://pbs.twimg.com/profile_images/1470780411747844096/vpxt_095.jpg',
        transactionHistory:{
          complete:98.9,
        },
        
    },
    {
        name: 'Sam Bankman-fried',
        uid:"2",
        walletAddress:"bc1qa7h93q2em2ta09flx7hfgqurcwnmxv9wq937hj",
        privateKey:"Kzf5Ddv7fRGDWNLKskNksXSPZbvWvXvaF9nLhdxzfkYxRxXaFV6x",
        transactionDescription:"You can pay me with All payment both Bank Transfer and Credit/Debit Card which can process on US.",
        image:
        'https://cdn.vox-cdn.com/thumbor/bKgZjpgLdPaxZM3n6vBwSJ1d6Vc=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22383655/sbf_photo_higher_resolution.jpeg',
        transactionHistory:{
          complete:98.4,
        },
        
    },
    {
        name: 'Gognumbdev',
        uid:"3",
        walletAddress:"bc1qzqnnmz0ghm43rawdavltgjdt28vesgppha6y39",
        privateKey:"L1D3m3LkPRfEvTgjQuoZvG7ci4GPfyKmDjoQ7EjZJox3WWzNW5mK",
        transactionDescription:"You can pay me with All payment both Bank Transfer and Credit/Debit Card which can process on US.",
        image:
        'https://lh3.googleusercontent.com/ogw/ADea4I40OTFSVDYMHohSaobJahOpB0r8krQoeaKE-SIq=s32-c-mo',
        transactionHistory:{
          complete:98.0,
        },
        
    },
    {
        name: 'Jirayut Srupsrisopa',
        uid:"4",
        walletAddress:"bc1qeh2ket4ajphexty3fzjg2umvqsmkr62h2ljfkl",
        privateKey:"KzAN3ngEfQD7QwgYtdP6tSV7FzrBZ2weusLohfByK3zwpV6tQY1E",
        transactionDescription:"You can pay me with All payment both Bank Transfer and Credit/Debit Card which can process on US.",
        image:
        'https://d2eohwa6gpdg50.cloudfront.net/wp-content/uploads/sites/8/2021/10/05221054/03-Jirayut-Topp-Srupsrisopa-601x900.jpg',
        transactionHistory:{
          complete:99.0,
        },
    },
    {
        name: 'Poramin Insom',
        uid:"5",
        walletAddress:"bc1qupeqxx0lt3fw5647smuhu8gj28nrfemhaq3gu7",
        privateKey:"Kxv18wRm8Z1XMRrB7o5uo8UCHcXKWGuLrvBjctTQHL69GYdDqvgk",
        transactionDescription:"You can pay me with All payment both Bank Transfer and Credit/Debit Card which can process on US.",
        image:
        'https://mpics.mgronline.com/pics/Images/564000000683801.JPEG',
        transactionHistory:{
          complete:99.0,
        },
      
    },
    {
        name: 'Akalarp Yimwilai',
        uid:"6",
        walletAddress:"bc1qu9lwf8jtjgte3d8aguc378c8zvcr0sj3zahmre",
        privateKey:"L1e2C3bEuPEmvXbxcitWdtkSyNH5sq6WMFrDkPyf7hNz2bqM1LZB",
        transactionDescription:"You can pay me with All payment both Bank Transfer and Credit/Debit Card which can process on US.",
        image:
        'https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_2560/https://www.asiablockchainreview.com/wp-content/uploads/2020/03/Akalarp-Yimwilai-Profile-2-scaled.jpg',
        transactionHistory:{
          complete:99.0,
        },
       
    },
]

export default seller;
