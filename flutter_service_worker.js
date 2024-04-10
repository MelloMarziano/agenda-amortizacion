'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d88757b0c41a5a3041f13effb0ce6621",
"index.html": "ad665cafdb2bf16c65e35749897955c6",
"/": "ad665cafdb2bf16c65e35749897955c6",
"main.dart.js": "dddf1a4847ba1d180b191689bd25ffff",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2b62239c8f45df6b19ea6cd43dcbfaa2",
".git/ORIG_HEAD": "d3a67a40299c4c015c54f0188ce1ae39",
".git/config": "e1c7e1fd8890cbe4d71b9476e5aa350e",
".git/objects/95/85943ac6edede8d6c15c5090f659d9e4b3936b": "01df93375db5d3491dd86a06ad4eb8d8",
".git/objects/50/23385b7ddb782e3a665d710d9d8cf58302ca18": "5ab41955dc9e8a1642ad93db850689ac",
".git/objects/57/d492fbc5e03ce6dfd9d69a60b2c4d7839d6607": "ff17a9562b37a679cb881bcc61f9f2be",
".git/objects/6f/cb8cf106db81bd28809260bde8ba95a3fcd6c0": "208262d11c1d85ffcbeb9a51361b0e87",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/ccf332e6b2ba631d887350ea9b5ce1cec91ec7": "f2e657dd97d500bcc010e529e1be7a45",
".git/objects/35/701129c1599858173edd2128429e88ae1b85d5": "27a49d9f4241d1f5b4c50ce4ba5cd965",
".git/objects/35/f893b37bbb5f0e402ca9b993688c0e36935e14": "45264ad766f455028bd924c01c315f83",
".git/objects/51/e282d90ba0bb533ab2346f0e016a9f38e7e6b8": "56e03915d6a06cbbd505be996d5d7994",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b2/4fe5a43b3b1d66848bad90d5c5a653b5636350": "586f49afd1425bf3b37a14f27521a75c",
".git/objects/ac/0bc458995d4d1894683ebee618b41b844862f4": "2ca3674e74fa2112cb74a9c13ec28ae0",
".git/objects/ad/628781082b5797a8e52360a624b93ce47170c0": "6a3cbd2d67095505d2c04e33d70a57fe",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/a4a7ac67d7ff7bd3208f8110602c8220d5c9d4": "bf5438426862027708b1203b27fcf895",
".git/objects/df/31a245a0816c93620facf0d256294de0d096ee": "9d620fd21566c4577191621a3467db56",
".git/objects/b4/ab934ae0afb35f262da3cdfd81cced2d6ee757": "1f6794d44272178e6f9c6949cf24b205",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d1be1195aeef8d64374e961f29ac26b7da2c75": "6f58888399885605c63cae31e579b85a",
".git/objects/d6/2c4b9d7207192ee1a0f526506e3fd6ad86f648": "bc3b0a252d1ceee8510d28f3408b7efa",
".git/objects/d8/66b69859bbb51e49756d8a27db230b29e994ab": "e93e14346bdf18b6dcf93d6dabd393f6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/956c269e6d1c9619dc46c0a7400866986ba9ef": "f630f1e5b7c28daa4b335d72036852ec",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/fb/80ea06dbe8e04d13dd40896297a40dba439f70": "910349376acba8f01bd6501260803d44",
".git/objects/c1/e323b332d1c066a042e9b847c1d66cb4938777": "ca82e4c64b914c0ab84db796d5086c8c",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c6/9e9fccde6edd6559bfd3f92d10b69972ddd3fb": "0d4fc1c1c6ad33571e48195b019ae1cd",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/7d/b46068cae74bde842086bea40efe03ba1605e9": "38f170b4fee9f62d1e6fbf2dc9461dcd",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/9d565c895247523ff41d0790bdd049968008e9": "dd48992cebf88f1eca4ce0dd8d1ddda1",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/42/01ac785c6901a6fe3d00a224e27936408e2c66": "7085960534d19ab2a9ebf7b23a76e069",
".git/objects/89/508724576ea83e6066638e49fa2099cabd742d": "2e97a50b2ea137ee801e99f6c52eeb92",
".git/objects/89/30463922ef4bb1affeba0cf949ab537043012b": "ff0f27b61dcea5ce799988ca476fbdf9",
".git/objects/45/2428bcb36f35385ddc7d9f026b4cbeb7441a04": "e7f186fc9698127df82b528f175ecf12",
".git/objects/73/e00a471a10b0439cbbb560730b9f9467c5cd3f": "ea35dbb384fd2e8dd61289e8914ee6bc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/8389d2c7b2393a012b797a6af67defa8630546": "581a2f97aebe0e2520d2d9c07b2d8078",
".git/objects/4d/69e7ffee4d6b7ca43d2f2a8fec3b8dbf35a6a4": "53d4a72c9f08d3d851b9c8432f477631",
".git/objects/72/fd1e4fc824d93c89a87860c62d6fffa6cc019a": "a7e427c04685af08c2930f3496740ee1",
".git/objects/2a/af1dd64b6dc416597bdea94410a5300b7f2fa3": "78b14d4a188c31e75d422c9d9f8bfa81",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/5c/07c6dc2b08d9588b935915f0ddfeaeddbd7384": "f68a1bb18b5c171bdb12a82a28fa42bc",
".git/objects/3a/5927e2a90392e8dba5f77be45ecd2583177d6f": "ed7f2372deb8d5cbf85cdf80537f36d5",
".git/objects/54/d4e07321e2d0b30f090283cf2477c9e10b46a6": "d18109c369d738c82651dbe6541b7ad0",
".git/objects/98/765ed0ca084d800d412f888be82daa97257da8": "a71736e939d9a68fb2fd0d1f0dbd20bb",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/6c/a0931d68164ad4a20630b9d2be221fbbce66ee": "f0d9540032f3ad21d04e8a139acfb657",
".git/objects/52/c168ce9038380d5522b6f6c7a67bbdc2826d50": "1cea2ccdbd7bc2c34286df6551f7c672",
".git/objects/90/cf103208e512aedb1feb7270fe35363fbb9591": "356aa845bfccb852cc5163fa30a20dc2",
".git/objects/d3/1bc2446e831561b85ca724024c2d71ec20a17a": "4306a4002efc2584dc4c63acbc9c239b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/20bc0384901a7f724ff438ba0b19ed744e34d3": "7671ec3b3ca1f213d9b8f286d6da6c24",
".git/objects/a7/881e6949f3e47f0cffd33753a0445886b5ca71": "48649c4ecf3ae89de3f7a865302122fa",
".git/objects/dc/c305fb3fedd8f508b0f66935cd1961ffccf8a4": "1f8b7725ade2cc5d47a0354bded484fa",
".git/objects/aa/8f3b7889c017f1ca52fd6a6a9f65478fec5d5c": "1c39eac6ab26289ff5e54959c884fafb",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/eacb899d12b008111e9e3a6ae3007a7b89c413": "8692bde1798758dd7da87528e61dfdf3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/60136c731e77a50ca73a635a91474dd23028f7": "2c36351e38fec0694bbc6dc58b85a9f3",
".git/objects/c3/ac83f6cf7ea425552b4670ccd148e885be38d9": "b544be0de17d932c85243e9ebb072416",
".git/objects/c4/4d0f5baf7a114062d3ee633a82ff63cf76ce90": "d9257ae02811e5269a06facc4b30a852",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cc/8189b83ce9a4e20fdc90a6360b27a360227770": "143c11145f4639b3bbff3ac84b879a01",
".git/objects/e6/9b1c558fb8514e83acb9c93c8372315d163145": "c37b0510d7936cb9e3768be8ef2e07ac",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/fa/04544d01daba657f4fbf0a5558b7253adee468": "1b7e140b3cc8d298869f5d9d90fcccd2",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c2/98caa919932053dec3cc65d428f4572f649c35": "cb8c5d98d83a30fd9c16f6271608fad7",
".git/objects/f6/aa08744f150d88a1398ad550f1b33398f28d75": "46acbceb7645a77205b8787f07dbdb46",
".git/objects/cb/3efb2915d3d59014bf8f6da04df7eb0034d34a": "26bfa8d23bbd124c791c512aded8987e",
".git/objects/46/9a37c194002da0c606957396b85b4e3a465030": "9d123b31c6cc6db70578e465a1e4c98b",
".git/objects/46/5a48c29d72e911fe8536b892150759c343fbd9": "52d503c1a60c06f65bd512483b5d2c31",
".git/objects/77/fef64dae66d06fae5d24ede5be863091d6102c": "f79e02ba05f757323f5ce70a1428d7ed",
".git/objects/70/9a4fb86fbcca1e7b01e8f92770c375e47231be": "3973be5261406e6f2e3b779f75e2c6a6",
".git/objects/70/4f19356220db5e553bd35a5dd410d35818e72e": "ca0145796f341fbabfb3d68f0e990858",
".git/objects/84/1ee835223bfbb281c715fe7fbf619a14bbadf9": "17d934fbdfb88db7c0e2839328dedc36",
".git/objects/84/f57772110655cbf7f42bf15ce724e539e9d3c8": "5f380f798829b6615eaa36b7ca1a5ea8",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/12/80987a114aca6d473c1e07bff03a2824c94a45": "9c68c47c3f9e1a901c940e86ff6ce4e2",
".git/objects/12/f9eb8862737178cb1fb16663fda990f9ff8f5d": "82b502a11d8d10639cd969dd2113452e",
".git/objects/12/15a709e679bee1a340e8e8cc7874dfa3228c39": "a07805504d4040109595a5b8c2c00639",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/1c/bd6eb9016884bfba2fae85d2f133bc6f9df7d9": "122fe22d90438c506d303c594f19889e",
".git/objects/2e/680916080827120363ab1bcfc5c9ee16cee552": "0b42dcb8320296cfd09ec6358dd7793c",
".git/objects/8e/de6f4ad2c98c5cecb3c3d9748bcb00c9712782": "8cbab6da3005ef8a4dfdb9fc20d36975",
".git/objects/25/62be2bb263649d3510b2501205a1239635b964": "319ea4a8fb3b6362c7895ff7f6e5dbc1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8da5cc4fc21f62fc5ae1f31bc61f70cf",
".git/logs/refs/heads/main": "d5109643acdae442794e107f98ef1c15",
".git/logs/refs/remotes/origin/HEAD": "03d947b588ef73a0e82af2db969c3714",
".git/logs/refs/remotes/origin/main": "7d56ef53c1233a5e3e7a5354d5ea29b5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "5ee4882e898dacd5487ba5452c170d3a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "5ee4882e898dacd5487ba5452c170d3a",
".git/index": "7b2cc60a64756ef036bef020472128b8",
".git/COMMIT_EDITMSG": "9081b0f0f6ef2ab29e6d9f8a586e6140",
".git/FETCH_HEAD": "f85d5d5d122bf4642eb130016b69eea4",
"assets/AssetManifest.json": "4f5cc20d4b3eb4e0759ec5b638413f7e",
"assets/NOTICES": "bb9886398d44fd2d46b28c7fc059ceb4",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "918e9f1bbc968903b63002f3f5820db4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "607f003f3d829cdf35e1f0436bb823b0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "09b358a28721c2cd5a8aa9715db75afb",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/cool_alert/assets/flare/warning_check.flr": "ff4a110b8d905dedb4d4639a17399703",
"assets/packages/cool_alert/assets/flare/loading.flr": "b6987a8e6de74062b8c002539d2d043e",
"assets/packages/cool_alert/assets/flare/info_check.flr": "f6b81c2aa3ae36418c13bfd36d11ac04",
"assets/packages/cool_alert/assets/flare/success_check.flr": "9d163bcc6f6b58566e0abde7761a67a0",
"assets/packages/cool_alert/assets/flare/error_check.flr": "d9f54791d0d79935d22206966707e4b3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ae0e7c695673621875d663d18a30f8e7",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
