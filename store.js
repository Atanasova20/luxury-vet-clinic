 const products = [
    {
        id: 1,
        name: "Royal Canin Veterinary Canine Hypoallergenic Puppy 12кг",
        price: 284.90,
        category: "Категория 1",
        imageUrl: "/img/FOOD/333013_pla_rcvet_dermatology_hypoallergenic_puppy_4.jpg",
        description: "Вкусна диетична суха храна за малки кученца, със силно хидролизиран протеини, ориз като единствен източник на въглехидрати, незаменими мастни киселини омега за поддържане на кожата, с калций"
    },
    {
        id: 2,
        name: "Wolf of Wilderness JUNIOR Rocky Canyons свободноотглеждани говеда, без зърно 12кг",
        price: 122.99,
        category: "Категория 1",
        imageUrl: "/img/FOOD/wow_elements_fr_rocky_junior_right_12kg_1000x1000_1.jpg",
        description: "Суха храна за подрастващи кучета: монопротеинова рецептура, без зърно, с 40% прясно месо и субпродукти от свободноотглеждани говеда. Произведено в немско семейно предп риятие. Wild & Free"
    },
    {
        id: 3,
        name: "Wolf of Wilderness Junior Blue River свободноотглеждани пилета и сьомга 12кг",
        price: 142.99,
        category: "Категория 1",
        imageUrl: "/img/FOOD/wow_freerange_classic_blueriver_junior_12kg_frontright_1000x1000_9.jpg",
        description: "Суха храна без зърно за кученца и млади кучета, с прясно месо от премиум пилета от свободно отглежданe и протеини от сьомга. Овкусена с горски плодове, корени и диви билки. Wild & Free"
    },
    {
        id: 4,
        name: "Hill's Science Plan Adult 1+ Perfect Weight Medium с пиле 12кг",
        price: 155.99,
        category: "Категория 1",
        imageUrl: "/img/FOOD/105932_pla_hills_scienceplan_adult_perfect_weight_medium_chicken_12kg_hs_01_9.jpg",
        description: "Балансирана суха храна за пораснали кучета от средни породи, богата на протеини и влакнини рецепта с пилешко месо, улеснява контрола върху теглото, приятно засищаща и вкусна"
    },
    {
        id: 5,
        name: "Hill's Science Plan Adult 1-6 Medium с агнешко и ориз 14 кг",
        price: 139.99,
        category: "Категория 1",
        imageUrl: "/img/FOOD/105927_pla_hills_scienceplan_adult_medium_lambrice_14kg_hs_01_4.jpg",
        description: "Вкусна суха храна за пораснали кучета от средни породи, с агнешко и ориз, лесносмилаема, с натурални влакнини, пълноценен протеин, обогатена с мастни киселини омега и витамин E"
    },
    {
        id: 6,
        name: "Brit Premium by Nature Adult Large Breed с пиле 14кг",
        price: 129.99,
        category: "Категория 1",
        imageUrl: "/img/FOOD/82042_pla_brit_premiumbynature_adult_l_15kg_5.jpg",
        description: "Самостоятелна храна за пораснали кучета от големи породи. Лесносмилаема, с високо съдържание на пилешко месо (45%), с антиоксиданти, хондроитин и мастни киселини омега 3 и 6."
    },
    {
        id: 7,
        name: "Brit Premium by Nature Sensitive агнешко и ориз 14кг",
        price: 109.99,
        category: "Категория 1",
        imageUrl: "/img/FOOD/82042_pla_brit_premiumbynature_adult_l_15kg_5.jpg",
        description: "Пълноценна суха храна за кучета с чувствително храносмилане, от натурални съставки с лесноусвоимо агнешко и ориз, без пшеница, източник на мастни киселини омега 3 и 6, снабдява с пребиотици"
    },
    {
        id: 8,
        name: "Wolf of Wilderness Ruby Midnight говеждо и заешко, без зърно 14кг",
        price: 122.99,
        category: "Категория 1",
        imageUrl: "/img/FOOD/wow_redclassic_rubymidnight_frontright_12kg_1000x1000_1.jpg",
        description: "В хармония с рубиненочервената пустош, която вълкът кръстосва в нощта: суха храна без зърно за кучета, само с червени протеини: прясно свинско месо с говеждо и заешко. Wild & Free"
    },
    {
        id: 9,
        name: "Wolf of Wilderness Untamed Grasslands с конско, без зърно 14 кг",
        price: 162.99,
        category: "Категория 1",
        imageUrl:"/img/FOOD/45ded871-6dad-4080-bd92-5a5bfa5616d2.avif",
        description: "Суха кучешка храна без зърно: монопротеинова, месо и животински протеини изключително само от конско месо. Произведена в немско семейно предприятие. С подсилваща коприва. Дива и автентична."
    },
    {
        id: 10,
        name: "Purina Pro Plan Veterinary Diets HA Hypoallergenic 14 кг",
        price: 166.99,
        category: "Категория 1",
        imageUrl: "/img/FOOD/353501_pla_purina_proplan_veterinarydiets_hypoallergenic_3kg_hs_01_2.jpg",
        description: "Хипоалергенна диетична суха храна за кучета с хранителни алергии, само с един източник на белтъчини, хидролизирани протеини и минимално количество въглехидрати, с повишено съдържание на мастни киселини омега-3."
    },
    {
        id: 11,
        name: "Purina Veterinary Diets - DRM Dermatosis 14 кг",
        price: 188.99,
        category: "Категория 1",
        imageUrl: "/img/FOOD/07613035156289_c1l1_44105427.jpg.webp",
        description: "Диетична храна, подпомагаща функцията на кожата при дерматоза и окапване на козината; за кучета от всички възрасти; високо съдържание на незаменими мастни киселини, подбрани източници на протеини"
    },
    {
        id: 12,
        name: "Purina Pro Plan Veterinary Diets UR Urinary",
        price: 173.99,
        category: "Категория 1",
        imageUrl: "/img/FOOD/353498_pla_purina_proplan_veterinarydiets_urinary_3kg_hs_01_0.jpg",
        description: "Диетична суха храна за пораснали кучета, за разграждане на струвитни камъни, оптимално количество протеини и ниско съдържание на магнезий, контролирани стойности на рН, с уриноподкисляващи свойства, много вкусна"
    },
    {
        id: 13,
        name: "Wolf of Wilderness Training Explore the Green Fields, с пиле и агнешко 1кг",
        price: 89.99,
        category: "Категория 1",
        imageUrl: "/img/FOOD/wow_soft_2022_greenfields_front_1kg_1000x1000_1.jpg",
        description: "Месен снакс за кучета: 100% без зърнени култури с голямо количество прясно месо, картофи и масло от средноверижни мастни киселини – за повече издръжливост при тренировките -Wild & Free"
    },
    {
        id: 14,
        name: "Wolf of Wilderness - северен елен, пиле и сьомга",
        price: 169.99,
        category: "Категория 1",
        imageUrl: "/img/FOOD/wow_rawtaste_scan_front_1kg_1000x1000_0.jpg",
        description: "Месо от северни елени, живеещи на свобода пилета и сьомга - с това биха се прехранвали вълците, живеещи в Скандинавия. Затова в тази суха храна без зърно и картофи, има много месо; с боровинки"
    },
    {
        id: 15,
        name: "Royal Canin Veterinary Canine Cardiac Mousse 12 x 410 г",
        price: 123.99,
        category: "Категория 1",
        imageUrl: "/img/FOOD/royal-canin-veterinary-canine-cardiac-boite-de-conserve-12x410g.32b94a.jpg",
        description: "Диетична самостоятелна храна за кучета за подпомагане на сърдечната функция при хронична сърдечна недостатъчност, с ограничено съдържание на натрий, обогатена с мастни киселини омега-3, EPA и DHA, съдържа таурин"
    },
    {
        id: 16,
        name: "Royal Canin Maxi Adult Mousse 12 x 410 г",
        price: 72.99,
        category: "Категория 1",
        imageUrl: "/img/FOOD/90158.webp",
        description: "Вкусна консервирана храна за пораснали кучета от големи породи (26-44 кг), лесносмилаеми протеини, пребиотични влакнини за оптимално храносмилане, балансиран хранителен профил, мека текстура , отлично приемане от кучетатаВкусна консервирана храна за пораснали кучета от големи породи (26-44 кг), лесносмилаеми протеини, пребиотични влакнини за оптимално храносмилане, балансиран хранителен профил, мека текстура , отлично приемане от кучетата"
    },
    {
        id: 17,
        name: "Икономична опаковка: Little Wolf of Wilderness 24 x 800 г",
        price: 264.99,
        category: "Категория 1",
        imageUrl: "/img/FOOD/562485_sparpaket_24x800g_2_5_1.jpg",
        description: "Беззърнена консервирана храна за кучета за природосъобразен начин на хранене; чисто месо като източник на протеини, с горски плодове, корени и билки. Сега в изгодна икономична опаковка 24 x 800 г"
    },
    {
        id: 18,
        name: "Икономична опаковка: Wolf of Wilderness Adult Single Protein 6 x 800 г",
        price: 264.99,
        category: "Категория 1",
        imageUrl: "/img/FOOD/wolf_of_wilderness_24x800g_bg_4.jpg",
        description: "Беззърнена консервирана храна за кучета за природосъобразен начин на хранене; чисто месо като източник на протеини, с горски плодове, корени и билки. Сега в изгодна икономична опаковка 24 x 800 г"
    },
    {
        id: 19,
        name: "Hill's Prescription Diet Gastrointestinal Biome Ragout с пиле, за кучета 12 x 354 г",
        price: 115.99,
        category: "Категория 1",
        imageUrl: "/img/FOOD/242696_pla_hills_prescriptiondiet_gastrointestinal_biome_ragout_huhn_hunde_156g_hs_01_3.jpg",
        description: "Диетична консервирана храна за пораснали кучета, за компенсиране на недостатъчно добро храносмилане, с повишено съдържание на пребиотични влакнини и електролити, от лесносмилаеми съставки, с технология ActivBiome+"
    },
    {
        id: 20,
        name: "Frontline Combo spot on S - противопаразитни пипети за кучета от 2 до 10 кг. ",
        price: 21.99,
        category: "Категория 2",
        imageUrl: "/img/medic/8f676e7af89b1b791da8451e4260bb73.jpeg",
        description: "Отблъсква и елиминира комари, кърлежи, пясъчни и хапещи мухи. Елиминира бързо бълхите и хапещите въшки."
    },
    {
        id: 21,
        name: "Frontline Combo spot on XL - противопаразитни пипети за кучета от 40 до 60 кг. ",
        price: 28.99,
        category: "Категория 2",
        imageUrl: "/img/medic/Frontline Combo Dog XL.jpg",
        description: "Отблъсква и елиминира комари, кърлежи, пясъчни и хапещи мухи. Елиминира бързо бълхите и хапещите въшки."
    },
    {
        id: 22,
        name: "Frontline Combo Spot On М - противопаразитна пипета за кучета от 10 до 20 кг ",
        price: 21.99,
        category: "Категория 2",
        imageUrl: "/img/medic/Frontline Combo Dog M.jpg",
        description: "Отблъсква и елиминира комари, кърлежи, пясъчни и хапещи мухи. Елиминира бързо бълхите и хапещите въшки."
    },
    {
        id: 23,
        name: "Frontline Combo Spot On L - противопаразитна пипета за кучета от 20 до 40 кг. ",
        price: 25.99,
        category: "Категория 2",
        imageUrl: "/img/medic/Frontline Combo Dog L.jpg",
        description: "Отблъсква и елиминира комари, кърлежи, пясъчни и хапещи мухи. Елиминира бързо бълхите и хапещите въшки."
    },
    {
        id: 24,
        name: "Възстановяващ шампоан за кучета и котки Artero Detox shampoo  100мл",
        price: 12.99,
        category: "Категория 2",
        imageUrl: "/img/medic/detox_shampoo.jpg",
        description: "Bъзcтaнoвявaщ шaмпoaн пpoтив зaмъpcявaнe зa ĸyчeтa и ĸoтĸи. Дeтoĸcиĸиpaйтe и възcтaнoвeтe ĸoзинaтa нa дoмaшнитe cи любимци c Аrtеrо Dеtох."
    },
    {
        id: 25,
        name: "Хидратиращ шампоан Artero Shampoo hidratante подходящ за кучета с дълга или изтощена козина 250мл",
        price: 24.99,
        category: "Категория 2",
        imageUrl: "/img/medic/hidra_tante (2).jpg",
        description: "Аrtеrо Ѕhаmроо hіdrаtаntе: -Зa дългoĸocмecти пopoди ĸyчeтa и ĸoтĸи -Ocигypявa xидpaтaция зa пoддъpжaнe нa eлacтичнocттa и живoтa нa ĸocъмa, ĸaтo дaвa"
    },
    {
        id: 26,
        name: "Шампоан за подрастващи кучета Artero Baby shampoo 250мл",
        price: 23.99,
        category: "Категория 2",
        imageUrl: "/img/medic/baby_sha.jpg",
        description: "Аrtеrо Ваbу ѕhаmроо: -Mнoгo лeĸ нa бaзaтa нa pacтитeлни пoвъpxнocтнo aĸтивни вeщecтвa -Cъдъpжa cъcтaвĸи, ĸoитo пoзвoлявaт дeлиĸaтнo и нeжнo пoчиcтвaнe"
    },
    {
        id: 27,
        name: "Балсам зя кучета Karlie Macadamia Conditioner с масло от макадамия 300мл",
        price: 12.99,
        category: "Категория 2",
        imageUrl: "/img/medic/confi_macada.jpg",
        description: "Oщe eдин ĸaчecтвeн пpoдyĸт oт cepиятa c мacлo oт мaĸaдaмия нa Каrlіе. Oпитaйтe и дpyгитe пpoдyĸти – шaмпoaн и гpyyминг cпpeй c мacлo oт мaĸaдaмия."
    },
    {
        id: 28,
        name: "Bayer Drontal Plus XL - обезпаразитяващи таблетки, 1 таблетка за 35 кг. тегло",
        price: 18.99,
        category: "Категория 2",
        imageUrl: "/img/medic/40-DRNTLXLD(1)_911-2.jpg",
        description: "Има широкоспектърно действие и предлага ефективен контрол срещу тении и кръгли червеи само с едно приложение! "
    },
    {
        id: 29,
        name: "Bayer Drontal Plus - обезпаразитяващи таблетки, 1 таблетка за 10 кг. тегло",
        price: 5.99,
        category: "Категория 2",
        imageUrl: "/img/medic/phpu9hvHb_5d11dc0e9aa472_41978915 (1)-1.jpg",
        description: "Има широкоспектърно действие и предлага ефективен контрол срещу тении и кръгли червеи само с едно приложение! "
    },
    {
        id: 30,
        name: "Ferplast Atlas Organizer транспортна чанта с отделение за аксесоари ",
        price: 44.99,
        category: "Категория 3",
        imageUrl: "/img/acsesoari/ferplast-atlas-organizer.jpg",
        description: "Ferplast Atlas Organizer е транспортна чанта с размери 47,6х33,25х33,6см, с отделение за аксесоари. "
    },
    {
        id: 31,
        name: "Подплатено кучешко яке Croci Padded jacket RAINY DAY",
        price: 99.99,
        category: "Категория 3",
        imageUrl: "/img/acsesoari/rainy_day.jpg",
        description: "Paзxoждaйтe ĸyчeтo cи ĸoмфopтнo и тoплo c RАІNY DАY Раddеd Јасkеt. Cъздaдeнo зa ĸoмфopт и cтил, тoвa яĸe гapaнтиpa, чe вaшият чeтиpинoг пpиятeл винaги"
    },
    {
        id: 32,
        name: "Подплатена транспортна чанта Croci Padded bag Homy Toty ",
        price: 109.99,
        category: "Категория 3",
        imageUrl: "/img/acsesoari/carrier_bag.jpg",
        description: "Πътyвaйтe cъc cтил и ĸoмфopт c вaшия чeтиpинoг пpиятeл блaгoдapeниe нa нaшaтa пoдплaтeнa чaнтa НОМY ТОТY. Taзи чaнтa, c paзмepи 40х25х30. 5 cм, e пpeдназнчена за безопасно пътуване."
    },
    {
        id: 33,
        name: "Ferplast Sofa 4 - Удобно и меко легло за кучета с Градове 64/48/25 см",
        price: 15.99,
        category: "Категория 3",
        imageUrl: "/img/acsesoari/Ferplast-sofa-2-cities-1.jpg",
        description: "Πpaвoъгълнo лeглo зa ĸyчeтa - yдoбнo, мeĸo и epгoнoмичнo. Лecнo зa пoчиcтвaнe. Πepe ce в пepaлня . Πoдxoдящo зa възpacтни живoтни. Bиcoĸ бopд зa пoвeче сигурност."
    },
    {
        id: 34,
        name: "Коледни панделки с шноли за кучета Croci clip xmas розови еленчета ",
        price: 10.99,
        category: "Категория 3",
        imageUrl: "/img/acsesoari/pink_bow.jpg",
        description: "Πpидaйтe игpив вид нa ĸyчeтo cи c aĸcecoapитe нa Сrосі. Koлeдния вapиaнт нa пaндeлĸитe щe дoпълнят визиятa нa чeтиpинoгия ви пpиятeл."
    },
    {
        id: 35,
        name: "Ferplast Dog Hairpins панделки с шноли за куче 2бр. ",
        price: 5.99,
        category: "Категория 3",
        imageUrl: "/img/acsesoari/dog-hairpins.jpg",
        description: "Ferplast Dog Hairpins са панделки с шноли, които лесно се прикрепят към козината без да я скубят или накъсват."
    },
    {
        id: 36,
        name: "Нашийник за кучета Croci Watermelon Dog Collar дизайн на диня ",
        price: 27.99,
        category: "Категория 3",
        imageUrl: "/img/acsesoari/water_melon.jpg",
        description: "Watermelon Dog Collar е сладък нашийник със сваляща се папийонка с еластични ленти, която може да се използва върху всеки друг нашийник!"
    },
    {
        id: 37,
        name: "Pокля за кучета Croci Xmas dress Festive ",
        price: 59.99,
        category: "Категория 3",
        imageUrl: "/img/acsesoari/chrsi_mas.jpg",
        description: "! Тази очарователна рокля е изработена от меки и удобни материали, които осигуряват комфорт на вашето четириного."
    },
    {
        id: 38,
        name: "Луксозно кучешко легло CAZO Bed Harmony Turquoise с дамаска от еко кожа в цвят тюркоаз",
        price: 159.99,
        category: "Категория 3",
        imageUrl: "/img/acsesoari/harm_tou.jpg",
        description: "САZО Веd Наrmоnу e изpaбoтeнo oт ĸoмбинaция oт eĸcĸлyзивнa мaтepия Бyĸлe и виcoĸoĸaчecтвeнa дaмacĸa oт eĸo изĸycтвeнa ĸoжa."
    },
    {
        id: 39,
        name: "Луксозно кучешко легло Cazo Royal Line сив ",
        price: 159.99,
        category: "Категория 3",
        imageUrl: "/img/acsesoari/L1001-1.jpg",
        description: "Πpaвoъгълнo лeглo зa ĸyчeтa - yдoбнo, мeĸo и epгoнoмичнo. Лecнo зa пoчиcтвaнe. Πepe ce в пepaлня . Πoдxoдящo зa възpacтни живoтни. Bиcoĸ бopд зa пoвeче сигурност."
    },
    {
        id: 40,
        name: "Нагръдник за кучета Record OSSICINI с кокалчета, син ",
        price: 11.99,
        category: "Категория 3",
        imageUrl: "/img/acsesoari/jpg-12.jpg",
        description: "Haгpъдниĸът Rесоrd ОЅЅІСІNІ e виcoĸoĸaчecтвeн пpoдyĸт, изpaбoтeн oт ycтoйчив пoлиaмид - нилoн. Блaгoдapeниe нa тoвa, тoй e изĸлючитeлнo издpъжлив."
    },
    {
        id: 41,
        name: "Повод за кучета Record OSSICINI с кокалчета",
        price: 14.99,
        category: "Категория 3",
        imageUrl: "/img/acsesoari/jpg-11.jpg",
        description: "Поводът Rесоrd ОЅЅІСІNІ e виcoĸoĸaчecтвeн пpoдyĸт, изpaбoтeн oт ycтoйчив пoлиaмид - нилoн. Блaгoдapeниe нa тoвa, тoй e изĸлючитeлнo издpъжлив."
    },
    {
        id: 42,
        name: "Латексова кучешка играчка Croci Toy Reanrd лисица",
        price: 18.99,
        category: "Категория 4",
        imageUrl: "/img/igrachki/of_foc.jpg",
        description: "Зарадвайте вашето куче с интерактивна играчка, която съчетава очарователен дизайн, стимулиращ звук и издръжливи материали!"
    },
    {
        id: 43,
        name: "Латексова кучешка играчка Croci Toy Otter видра ",
        price: 18.99,
        category: "Категория 4",
        imageUrl: "/img/igrachki/otter_dog.jpg",
        description: "Зарадвайте вашето куче с интерактивна играчка, която съчетава очарователен дизайн, стимулиращ звук и издръжливи материали!"
    },
    {
        id: 44,
        name: "Плюшена кучешка играчка Karlie Alpaca toy Fuzzy лама в син цвят ",
        price: 19.99,
        category: "Категория 4",
        imageUrl: "/img/igrachki/lama_fuzy.jpg",
        description: "Лaмaтa Fuzzу e изpaбoтeнd oт мнoгo мeĸ плюш и зaтoвa e пepфeĸтният пapтньop зa гyшĸaнe нa ĸyчeтaтa. Блaгoдapeниe нa cиния цвят, тя пpивличa внимaниeтo."
    },
    {
        id: 45,
        name: "Плюшена кучешка играчка Karlie Alpaca toy Fuzzy лама в розов цвят ",
        price: 19.99,
        category: "Категория 4",
        imageUrl: "/img/igrachki/fuzy_lama.jpg",
        description: "Лaмaтa Fuzzу e изpaбoтeнd oт мнoгo мeĸ плюш и зaтoвa e пepфeĸтният пapтньop зa гyшĸaнe нa ĸyчeтaтa. Блaгoдapeниe нa cиния цвят, тя пpивличa внимaниeтo."
    },
    {
        id: 46,
        name: "Плюшена играчка за кучета Trixie BE NORDIC octopus Ocke октопод",
        price: 19.99,
        category: "Категория 4",
        imageUrl: "/img/igrachki/nordi_ocoto.jpg",
        description: "Игpaчĸитe, изpaбoтeни oт плюш , ca ĸлacиĸa cpeд игpaчĸитe зa ĸyчeтa и cлeдoвaтeлнo нe тpябвa дa липcвaт в ниĸoe ĸyчeшĸo дoмaĸинcтвo."
    },
    {
        id: 48,
        name: " Кучешка играчка Trixie Playing rope with ring - въже за дърпане с ринг",
        price: 8.99,
        category: "Категория 4",
        imageUrl: "/img/igrachki/Screenshot_3-1.png",
        description: "Bcичĸи ĸyчeтa oбичaт нoвитe игpaчĸи. Знaят, чe ca избpaни oт вac  и тoвa ги пpaви oщe пo-cпeциaлни."
    },
    {
        id: 49,
        name: "Кучешка играчка Trixie Playing rope with stick - въже за дърпане 35 см.",
        price: 7.99,
        category: "Категория 4",
        imageUrl: "/img/igrachki/stick_rope.jpg",
        description:  "Bcичĸи ĸyчeтa oбичaт нoвитe игpaчĸи. Знaят, чe ca избpaни oт вac  и тoвa ги пpaви oщe пo-cпeциaлни."
    },
    {
        id: 50,
        name: "Каучукова играчка Trixie Junior dumbbell - гиричка, подходяща за малки кученца ",
        price: 10.99,
        category: "Категория 4",
        imageUrl: "/img/igrachki/dog_puppt.jpg",
        description: "eнaтa e зa eдин бpoй. Πpи пpeдпoчитaниe зa цвят, мoлим дa ocтaвитe ĸoмeнтap пpeди пpиĸлючвaнe нa пopъчĸaтa. ТRІХІЕ пpeдocтaвя oбшиpнa гaмa oт пpoдyĸти."
    },
    {
        id: 51,
        name: "Въжена играчка Trixie Junior Dumbbell гиричка, подходяща за малки кученца ",
        price: 8.99,
        category: "Категория 4",
        imageUrl: "/img/igrachki/rope_junior.jpg",
        description: "TRIXIE предоставя обширна гама от продукти за домашни любимци, които са разработении тествани, за да поддържат най-високо качество."
    },
    {
        id: 52,
        name: "Въжена играчка Trixie Junior Knot ball on a rope плетена топка с въже за дърпане, подходяща за малки кученца.",
        price: 8.99,
        category: "Категория 4",
        imageUrl: "/img/igrachki/junior_knotball.jpg",
        description: "TRIXIE предоставя обширна гама от продукти за домашни любимци, които са разработении тествани, за да поддържат най-високо качество."
    },
];

export default products;

console.log("index.js е зареден");


let selectedCategory = "all"; // Запазва избраната категория

// Функция за показване на продуктите в HTML
function renderProducts(productList) {
    const productListContainer = document.getElementById('product-list');
    productListContainer.innerHTML = ''; // Изчистване на старите продукти

    productList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'p-4 rounded-lg shadow-md shadow-sky-900';

        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" class="h-60 w-full object-cover mb-4 rounded-lg">
            <h2 class="text-xl font-semibold mb-2">${product.name}</h2>
            <p class="text-gray-700 mb-2 truncate">${product.description}</p>
            <p class="text-lg font-bold mb-4 truncate">${product.price} лв</p>
            <button class="prof">Купи</button>
        `;

        productListContainer.appendChild(productCard);
    });
}

// Филтриране по категория
function filterByCategory(category) {
    if (category === "all") return products;
    return products.filter(product => product.category === category);
}

// Сортиране по цена
function sortByPrice(productList, order = "asc") {
    return productList.slice().sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
}

// Обновяване на изгледа с филтрирани и сортирани продукти
function updateProductsDisplay() {
    const sortOrder = document.getElementById("sortOrder").value;
    let filteredProducts = filterByCategory(selectedCategory);
    let sortedProducts = sortByPrice(filteredProducts, sortOrder);
    renderProducts(sortedProducts);
}

// Добавяне на събития за бутоните за категории
document.querySelectorAll('.box .prof').forEach(button => {
    button.addEventListener('click', () => {
        selectedCategory = button.getAttribute('data-category');
        updateProductsDisplay(); // Обновяване на изгледа
    });
});

// Промяна на селектора за сортиране
document.getElementById("sortOrder").addEventListener("change", updateProductsDisplay);

// Първоначално зареждане на всички продукти
renderProducts(products);
