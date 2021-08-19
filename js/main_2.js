var basemapTile = 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.{ext}';

var basemapOptions = {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 18,
    ext: 'png'
};

var glacier_map_Data = {
    
    glacier_1: {
        center: [45.5, -89.5],
        zoom: 7,
        description: "Glacier one",
        // add title, shapes etc here
        /*Glacier 11000*/
        shape: 
            Toe_11000= {"type":"FeatureCollection", "features": [
            {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-89.01714901099996,47.701660041000025],[-88.98864567199996,47.67105872900004],[-88.89693208899996,47.632717624000065],[-88.76124959199996,47.56169631900008],[-88.58375016199994,47.49178961600006],[-88.44017698199997,47.44707161100007],[-88.30330388599998,47.44691295700005],[-88.17169811099996,47.44667491700005],[-88.02148343399995,47.45132287700005],[-87.87715720599994,47.43981218000005],[-87.74844734199996,47.433784306000064],[-87.64558455399998,47.43885976400003],[-87.53193680099997,47.44896815100003],[-87.38107493899997,47.46526214000005],[-87.24572687999995,47.48530297000008],[-87.13143423099996,47.50392737300007],[-86.98182199599995,47.53937042800004],[-86.82927429899996,47.57632309400003],[-86.62586405499997,47.62051563700004],[-86.53722267999996,47.642872296000064],[-86.52848360499996,47.655108436000035],[-86.66049972099995,47.65724573000006],[-89.01447077999995,47.70342257000004],[-89.01714901099996,47.701660041000025]]]},"properties":{"OBJECTID_1":1,"OBJECTID":1,"Years_Ago":11000,"SHAPE_Leng":387749.141631,"Shape_Le_1":5.06435076694,"Shape_Area":0.429078160361,"filename":"11000.jpg"}}
            ]
            },

        shape_style: g11000 = L.geoJSON(Toe_11000, 
            {
            style:  {color:"#e41a1c"}
            }
),

        shape_listener: g11000.on({
            click: function(){
            $("#panel").html(Toe_11000.features[0].properties.Years_Ago  +" Years Ago" + info11000 + glacierInfo + selfPlug);
            }
}),
      },
      
      glacier_2: {
        center: [45.5, -89.5],
        zoom: 7,
        description: "Glacier two",
        // add title, shapes etc here
        /*Glacier 14600*/
        shape: 
        Toe_14600 = {"type":"FeatureCollection", "features": [
        {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-90.65116417499996,47.70293454200004],[-90.72482365299999,47.673924999000064],[-90.79822703099995,47.63344243800003],[-90.87151684099996,47.592913355000064],[-90.93607653299995,47.54240954900007],[-90.98389479799994,47.50486972300007],[-91.01266156999998,47.46605101600005],[-91.03524057399994,47.43585163000006],[-91.09569047499997,47.40672034700003],[-91.16068607799997,47.39608128700007],[-91.20242634199997,47.38136616700007],[-91.24370674999994,47.34807033200008],[-91.24727017899994,47.32089010200008],[-91.27829107399998,47.30054916700004],[-91.35252049299999,47.24684182500005],[-91.42454322999998,47.19454164700005],[-91.49851758599999,47.142169952000074],[-91.58297018999997,47.09531966900005],[-91.69593298799998,47.02941600500003],[-91.78970295499994,46.95941544900006],[-91.82835428899995,46.930232197000066],[-91.91162510599997,46.86744039100006],[-91.99554737199998,46.82743409100004],[-92.06911560299994,46.79183942000003],[-92.12271105199994,46.779428163000034],[-92.18228311199994,46.76116312500005],[-92.25397574199997,46.73548525600006],[-92.32346255299996,46.70837829200008],[-92.37452539699996,46.68875637000008],[-92.41380912499994,46.68507654200005],[-92.47155654999995,46.67669948400004],[-92.49779041299996,46.66041357700004],[-92.53630909799995,46.640992280000034],[-92.60352557599998,46.61519304900003],[-92.65025475699997,46.595545755000046],[-92.66997578199994,46.57508444400003],[-92.69410222099998,46.56023089900003],[-92.73425967299994,46.53498854400004],[-92.79268852199999,46.503571829000066],[-92.84256524699998,46.468051606000074],[-92.88183268599994,46.42849094400003],[-92.92753540999996,46.394466917000045],[-92.94989701799994,46.34959887800005],[-92.95186608799997,46.30954130100008],[-92.92975250899997,46.28153421700006],[-92.85925850399997,46.27331860700008],[-92.79127616799997,46.27357100900008],[-92.71321257399995,46.27830917600005],[-92.63952461199995,46.28860811000004],[-92.57829646799996,46.301436514000045],[-92.50925582199994,46.32440533500005],[-92.44221727099995,46.347289440000054],[-92.41261793199999,46.37792243000007],[-92.37035638299994,46.40309578500006],[-92.32010085699994,46.43555965100006],[-92.22421472899998,46.46604055800003],[-92.16676037899998,46.47714513900007],[-92.07164040799995,46.47747958900004],[-91.96355058399996,46.462242262000075],[-91.88129117799997,46.47505522800003],[-91.84860834599993,46.487018110000065],[-91.75759648199994,46.48702458100007],[-91.67480884399998,46.485409692000076],[-91.61092690599997,46.49347106100004],[-91.53298945499995,46.517401738000046],[-91.46184380399995,46.56548027200006],[-91.39439978099995,46.60108704600003],[-91.31293960199997,46.66110276500007],[-91.18166198599994,46.731109263000064],[-91.12163612599994,46.77552488500004],[-91.02482937399998,46.78786178000007],[-90.98063779999995,46.797773128000074],[-90.96927097899999,46.782631328000036],[-90.95760682899999,46.75034730400006],[-91.00666688699994,46.706114670000034],[-91.04472870499995,46.66958103600007],[-91.09664029099997,46.636712301000045],[-91.13687825499994,46.57726777900007],[-91.18839689999999,46.532931133000034],[-91.22591702999995,46.48300696300004],[-91.22480609399997,46.433490293000034],[-91.18738430599996,46.359591409000075],[-91.12616009499999,46.325921202000075],[-90.99618142799994,46.285217860000046],[-90.89141040599998,46.26322281700004],[-90.77320977799997,46.256463342000075],[-90.59165834999999,46.22897204100008],[-90.47359851299996,46.22571206300006],[-90.21011180299996,46.22840493600006],[-90.07834092799999,46.21714115300006],[-89.99052527699996,46.20002253800004],[-89.63663278999996,46.19754044900003],[-89.30472963899996,46.19409865700004],[-89.14564109599996,46.193020372000035],[-89.10690236799996,46.21367948200003],[-88.97509624199995,46.21828879600008],[-88.74396655199996,46.24455812300005],[-88.43920812199997,46.263282384000036],[-88.18463496799995,46.27857294900008],[-88.00977466999996,46.175646776000065],[-87.99389010599998,46.04677587200007],[-88.03142757799998,45.90454467200004],[-88.07824403599994,45.733876871000064],[-88.11693049199994,45.64521481500003],[-88.15630836499997,45.53154329200004],[-88.25459067099996,45.31159869500004],[-88.32963412999999,45.169820886000025],[-88.40834291299996,45.06376788400007],[-88.48581727299995,44.99336901300006],[-88.79481685399998,44.90415892300007],[-88.88639060299994,44.84792515000004],[-88.88261184299995,44.78357859500005],[-88.94319230899998,44.76271860500003],[-88.97231671099996,44.62840776200005],[-89.00318747399996,44.57866096200007],[-89.02004076199995,44.46804576400007],[-89.04649611099995,44.37537170000007],[-89.10740785599995,44.30082986600007],[-89.08883401599996,44.21492877800006],[-89.02088686299999,44.117891385000064],[-88.83475711099999,43.998228366000035],[-88.68786675299998,43.92517043600003],[-88.62533997199995,43.84939582800007],[-88.57299960499995,43.76656712400006],[-88.46045322499998,43.73294585800005],[-88.39507582999994,43.78207346700003],[-88.33422715399996,43.841949181000075],[-88.26389529699998,43.883781630000044],[-88.26171217099994,43.95878690500007],[-88.25436012199998,44.04085874400005],[-88.13665456199999,44.003267237000045],[-88.04759712699996,44.00177966800004],[-87.97724235799996,44.03271403600007],[-87.91264601899996,44.03869804900006],[-87.85100620199995,43.96251794800003],[-87.84031258699997,43.84797273600003],[-87.77934997599993,43.76104507100007],[-87.69970123099995,43.65226923900008],[-87.59451333699997,43.57506238600007],[-87.41895871099996,43.54264457600004],[-87.19847646199997,43.53030423300004],[-87.05535483399996,43.54457143500008],[-86.90199607799997,43.56552812900003],[-86.73246550099998,43.61082922300005],[-86.59688342599998,43.66046715300007],[-86.47311237099996,43.75675903800004],[-86.41494068499998,43.905016706000026],[-86.38487126299998,43.99339418100004],[-86.33611529199999,44.14190469500005],[-86.23094835399996,44.23494796600005],[-86.07578505799995,44.32618325100003],[-85.99546925899995,44.409139733000075],[-85.93780993299998,44.44997420000004],[-85.94529025199995,44.48596854700003],[-85.88575853799995,44.551719080000055],[-85.82903334099996,44.64612264200008],[-85.67299230199995,44.65817042300006],[-85.49721378799995,44.66565292100006],[-85.37988257999996,44.69311130300008],[-85.26070073999995,44.74180747400004],[-85.20102381099997,44.79647274300004],[-85.12731019099994,44.896951657000045],[-85.07522771199996,44.976883351000026],[-84.82164997499996,47.579520486000035],[-90.67336377599997,47.71242423500007],[-90.65116417499996,47.70293454200004]]]},"properties":{"OBJECTID_1":1,"OBJECTID":1,"Years_Ago":14600,"SHAPE_Leng":2202706.20984,"Shape_Le_1":25.0028099606,"Shape_Area":17.1995913109,"filename":"14600.jpg"}}
        ]},

        shape_style: 
        g14600 = L.geoJSON(Toe_14600, {
        style: {color:"blue"}
        }
),

        shape_listener:    
            g14600.on({
            click: function(){
            $("#panel").html(Toe_14600.features[0].properties.Years_Ago +" Years Ago" + info14600 + glacierInfo + selfPlug);
            }
        }),

      },

      glacier_3: {
        center: [45.5, -89.5],
        zoom: 7,
        description: "Glacier three",
        // add title, shapes etc here
        shape:
            Toe_17000 = {"type":"FeatureCollection", "features": [
            {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-90.80257177799996,47.694422805000045],[-90.86222397199998,47.665247442000066],[-90.91508604399996,47.62484245700006],[-90.95803303899999,47.58544825300004],[-91.01917862199997,47.54492503300003],[-91.09271780999995,47.49663293300006],[-91.13744776499999,47.48572257300003],[-91.19432270499999,47.453717991000076],[-91.22598803099999,47.42671888800004],[-91.25327888599998,47.39404483100003],[-91.29858830799998,47.35449497500008],[-91.35488375299997,47.30908341500003],[-91.41382942899997,47.261706307000054],[-91.49191066199995,47.20262235200005],[-91.56326114699999,47.15786191900003],[-91.61665197199994,47.12283520300008],[-91.64494317099997,47.09005134100005],[-91.68031442299997,47.061918510000055],[-91.73452409299995,47.01444274000005],[-91.74858348099997,46.94175084200003],[-91.73854830599998,46.900235628000075],[-91.72864410799997,46.86228889100005],[-91.70514887199994,46.83287815500006],[-91.66600897199999,46.80131027900006],[-91.62366569299996,46.776917671000035],[-91.55026225899996,46.75531549600004],[-91.46858503999994,46.74567813800007],[-91.38377803899994,46.747925758000065],[-91.24871820299995,46.74947940000004],[-91.19708552899993,46.76431757600005],[-91.14894001899995,46.781478469000035],[-91.08834267399999,46.78445186300007],[-91.00692035499998,46.786387758000046],[-90.97908530999996,46.78067668300008],[-90.94737340199998,46.75118052900007],[-90.93838366699998,46.73220616100008],[-90.94831208099998,46.70593260000004],[-90.95989734799997,46.67607254100005],[-91.00120538799996,46.66500363200004],[-91.02850889499996,46.64571269000004],[-91.05754397599998,46.62758970900006],[-91.07281220699997,46.61316088700005],[-91.09452456799994,46.57604782900006],[-91.11295233699997,46.54848696500005],[-91.11776169199999,46.53058148500003],[-91.12399765899994,46.498374786000056],[-91.12685495599999,46.46977266600004],[-91.11093806599996,46.449688397000045],[-91.08423164199996,46.405892745000074],[-91.04970107799994,46.400261948000036],[-91.00833934399998,46.39706236200004],[-90.95158052599999,46.39873937200008],[-90.91358681599996,46.39071504300006],[-90.87046244599998,46.383907855000075],[-90.81185063999999,46.37600480700007],[-90.76383959199995,46.38705097700006],[-90.72438110399997,46.39564190900006],[-90.63847221899994,46.40686916000004],[-90.56462655999997,46.42273526000008],[-90.51134690599997,46.432510584000056],[-90.45289127799998,46.44347225900003],[-90.32730869399995,46.46771218100008],[-90.26707800199995,46.483346151000035],[-90.14297639499995,46.48118746100005],[-89.84300789599996,46.47969872700003],[-89.65732711399994,46.40785826900003],[-89.46590880699995,46.26901435500008],[-89.38473015499994,46.15906824800004],[-89.37232217399998,46.044697961000054],[-89.29895872499998,45.89662691800004],[-89.19127953899994,45.795896034000066],[-89.04288713099999,45.713779739000074],[-88.81317766399997,45.64494244800005],[-88.52326877299998,45.56535339100003],[-88.34772919599999,45.53913320500004],[-88.28172005799996,45.481001443000025],[-88.24935543399994,45.432878068000036],[-88.29265439599999,45.34303229100004],[-88.51505546999994,45.10321006100003],[-88.68092601499995,44.90994226600003],[-88.83212689599998,44.72580551000004],[-88.88282864799999,44.521468026000036],[-88.93928291699996,44.345738820000065],[-88.91597518599997,44.16924722700003],[-88.90511613299998,44.04050887900007],[-88.77686594499994,43.85339730000004],[-88.63498640399996,43.723149343000046],[-88.45317832499995,43.63983570600004],[-88.30836892799994,43.656842280000035],[-88.18115130199999,43.74064944300005],[-88.10533528899998,43.64412736300005],[-88.07694916099996,43.50548020300005],[-88.01697621299996,43.33769126900006],[-88.02053189599997,43.22816265400007],[-87.97488779599996,43.032002686000055],[-87.92574681699995,42.754748824000046],[-87.89018209199998,42.46818362000005],[-87.89013807499998,42.277565752000044],[-87.84692496099996,42.03848385400005],[-87.74604783999996,41.817324159000066],[-87.58802798299996,41.613950112000055],[-87.35004156799994,41.532454906000055],[-87.03022367399996,41.59135333200004],[-86.77141863699995,41.68921014000006],[-86.51666584599997,41.81518954100005],[-86.41223131899994,41.97398477400003],[-86.29809079699999,42.180014037000035],[-86.12804763999998,42.445983640000065],[-86.00558320699997,42.65141657300006],[-85.85659114999999,43.04632439000005],[-85.84500492099994,43.21741730100007],[-86.03504616299995,43.40045063700006],[-85.91772016199997,43.686927799000046],[-85.72568643499994,43.89427499900006],[-85.70752393799995,44.146079014000065],[-85.57577670099994,44.226791743000035],[-85.33539704999998,44.25055543500008],[-85.15006930999994,44.24758344700007],[-84.83610884999996,47.577689332000034],[-90.81976554599999,47.700655631000075],[-90.80257177799996,47.694422805000045]]]},"properties":{"OBJECTID_1":1,"OBJECTID":2,"Years_Ago":17000,"SHAPE_Leng":2261336.18634,"Shape_Le_1":24.4337768448,"Shape_Area":21.6098467975,"filename":"17000.jpg"}}
            ]},
        
        shape_style:
            g17000 = L.geoJSON(Toe_17000,
            {
            style:  {color:"#4daf4a"}
                }
            ),
        
        shape_listener:
         g17000.on({
            click: function(){
                $("#panel").html(Toe_17000.features[0].properties.Years_Ago +" Years Ago" + info17000 + glacierInfo + selfPlug);
            }
        }),
      },

      glacier_4: {
        center: [45.5, -89.5],
        zoom: 7,
        description: "Glacier four",
        // add title, shapes etc here
        /*Glacier 20500*/
        shape:
        Toe_20500 = {"type":"FeatureCollection", "features": [
        {"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-93.21916705999996,47.65554074700003],[-93.21923797299996,47.656615266000074],[-93.22725400499996,47.65530846100006],[-93.21916705999996,47.65554074700003]]],[[[-93.21916705999996,47.65554074700003],[-93.07598129399997,45.351628840000046],[-92.89029720099995,45.40649734100003],[-92.52326608799996,45.55011906000004],[-92.25730460999995,45.63785087200006],[-92.10651593899996,45.69074409900003],[-92.01229469399999,45.763888089000034],[-91.89666897899997,45.81587757500006],[-91.71993515199995,45.88297429100004],[-91.48143656299999,45.954185970000026],[-91.39044412799996,46.00176638500005],[-91.21434098299994,45.91804384400007],[-91.21418518599995,45.91090130500004],[-91.02284786699994,45.80203843600003],[-90.89386981499996,45.72096019000003],[-90.70442767599997,45.66155762400007],[-90.56153991999997,45.63734363100008],[-90.41904015999995,45.648671938000064],[-90.34789001799999,45.67391639300007],[-90.21563885499995,45.734970057000055],[-90.08302495499998,45.74585993300008],[-89.99119864999994,45.66730128000006],[-89.83339156499994,45.62074097300007],[-89.72134224399997,45.63123937700004],[-89.63485386399998,45.62027891000008],[-89.56341897699997,45.641461768000056],[-89.48670559599998,45.67686521300004],[-89.39490762299994,45.68356033600003],[-89.31872562699994,45.661698053000066],[-89.20247515799997,45.59664496700003],[-89.12162374099995,45.560328956000035],[-88.96505120999996,45.50186044000003],[-88.80335450199999,45.460984868000025],[-88.64172478299997,45.427025539000056],[-88.54102567499996,45.397204233000025],[-88.50141786299997,45.36096710100003],[-88.57422228899998,45.286877753000056],[-88.62645282099999,45.21964052000004],[-88.68335980799998,45.163150329000075],[-88.75063065999996,45.08888217300006],[-88.80772877099997,45.01089505500005],[-88.88960736799999,44.94384005500007],[-88.98197267499995,44.84109220200003],[-89.04311047999994,44.78802947100007],[-89.05372673399995,44.752390063000064],[-89.07469161199998,44.695396809000044],[-89.09511465899999,44.67055057500005],[-89.11584570199994,44.624265739000066],[-89.16132991799998,44.59245283100006],[-89.19701622899998,44.542688533000046],[-89.17793899499998,44.478239743000074],[-89.16927610799996,44.385279153000056],[-89.12368685299998,44.26821851200003],[-89.14523039899996,44.15404155200008],[-89.25887734699995,44.061932230000025],[-89.35075923199997,43.96720442700007],[-89.42599828799996,43.86040748700003],[-89.52599177199994,43.70601838700003],[-89.55155189299995,43.581049234000034],[-89.57746031699998,43.39055629500007],[-89.52146195699999,43.241431626000065],[-89.40913034999994,43.062216797000076],[-89.24791048499998,42.96001103700007],[-89.06194601599998,42.92289900600008],[-88.82694185299994,42.92073191600008],[-88.67439250599995,42.85354533200007],[-88.52246059899994,42.77425008400007],[-88.39482897899995,42.707009406000054],[-88.31618442799999,42.62844368800006],[-88.28719367099995,42.50887930400006],[-88.25814139699997,42.39526156900007],[-88.33437393899999,42.24747046300007],[-88.32102713599994,42.14600530100006],[-88.34013927499996,42.02713946700004],[-88.41468518199997,41.92096158700008],[-88.44946252499994,41.802287584000055],[-88.53769578499998,41.77365713000006],[-88.65058392299994,41.703547212000046],[-88.82728583499994,41.60420459800008],[-88.99552378999994,41.50451349400004],[-89.09978175799995,41.41600659100004],[-89.21970556699995,41.31559412400003],[-89.25233445499998,41.22643710400007],[-86.76284541199999,41.14164355200006],[-86.68025021299997,41.216732156000035],[-86.53248649699998,41.32555327100005],[-86.41550919599996,41.441099499000075],[-86.29674969199993,41.58028969900005],[-86.24336992499997,41.67981468200003],[-86.19740577499994,41.78551469400003],[-86.12843151899995,41.74151382800005],[-86.03649219699997,41.68476857100006],[-85.94546251699995,41.61607032500007],[-85.83204301799998,41.52862188900008],[-85.77149708499996,41.48471514600004],[-85.89981564399994,41.45958803600007],[-85.98322626599997,41.39106002300008],[-86.08116037899998,41.34083454800003],[-86.17315164299998,41.25458647800008],[-86.23137734999995,41.20290003900004],[-86.27310316999996,41.162562887000036],[-86.27198495999994,41.13183956800003],[-86.11414943399996,41.12304222100005],[-85.98680655899994,41.11866978000006],[-85.34124305599994,41.09254148000008],[-84.80007845399996,47.58777649000007],[-93.21916705999996,47.65554074700003]]]]},"properties":{"OBJECTID_1":1,"OBJECTID":1,"Years_Ago":20500,"SHAPE_Leng":3087165.91023,"Shape_Le_1":33.5221258781,"Shape_Area":32.9568211425,"filename":"20500.jpg"}}
        ]},

    shape_style:
     g20500 = L.geoJSON(Toe_20500, 
    {
    style:  {color:"#ffff33"}
        }  
),

    shape_listener:
    g20500.on({
        click: function(){
            $("#panel").html(Toe_20500.features[0].properties.Years_Ago +" Years Ago" + info20500 + glacierInfo + selfPlug);
        }
}),
      },

      glacier_5: {
        center: [45.5, -89.5],
        zoom: 7,
        description: "Glacier five",
        // add title, shapes etc here
        /*Glacier 24000*/
        shape: 
            Toe_24000 = {"type":"FeatureCollection", "features": [
            {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-93.06107369799997,44.96653938500003],[-92.87931826899995,45.02188307400007],[-92.70545482699998,45.07377237600008],[-92.51511504499996,45.14064600700004],[-92.32828500499994,45.20117533500007],[-92.17486251599996,45.26374343300006],[-92.03850197499997,45.34068634600004],[-91.93053120599996,45.39317261200006],[-91.88143663599999,45.44162427600003],[-91.79390153799994,45.481733838000025],[-91.73227820899996,45.54222448300004],[-91.67008197099995,45.58780498500005],[-91.58964085499997,45.591929882000045],[-91.49991572099998,45.566351173000044],[-91.42275040799996,45.53161528100003],[-91.33214184099995,45.461261053000044],[-91.25403624699999,45.37283547000004],[-91.09127745699999,45.255424815000026],[-90.97631647499998,45.18799235200004],[-90.82034815899999,45.17433366000006],[-90.70287072699995,45.20488817700004],[-90.58551103699995,45.259137689000056],[-90.48894621199997,45.304247805000045],[-90.40069263299995,45.35222407700007],[-90.25743630099998,45.418130907000034],[-90.14767911499996,45.47488802300006],[-90.00804325699994,45.46902928500003],[-89.94884798799995,45.42734051200006],[-89.89393668799994,45.40050981600007],[-89.80934075899995,45.42421586300003],[-89.68667662299998,45.43585318000004],[-89.64012673099995,45.44166996100006],[-89.55947889199996,45.48008796500005],[-89.49581901199997,45.50066337900006],[-89.42370455799994,45.51520702800008],[-89.36869404299995,45.511939306000045],[-89.30168850499996,45.45201018000006],[-89.15415474599996,45.41826610100003],[-89.01967733899994,45.372535956000036],[-88.88541895599997,45.326649176000046],[-88.75131461299998,45.28358287200007],[-88.70507339199997,45.27711375600006],[-88.72728211099997,45.22675307700007],[-88.76959401499994,45.21828552800008],[-88.82904212599999,45.19509376600007],[-88.84642217199996,45.16847663100003],[-88.89777687999998,45.12432688300004],[-88.96973832699996,45.098204441000064],[-89.04203249399995,45.04822192000006],[-89.11406316699998,45.007122766000066],[-89.19944028999998,44.90355019500004],[-89.23386008899996,44.83530902100006],[-89.27696426899996,44.73436129500004],[-89.32380950799995,44.65723683700003],[-89.32955692499996,44.52030948100003],[-89.30142265599994,44.43677156500007],[-89.28173882099998,44.34732390000005],[-89.27054588699997,44.24601565100005],[-89.28772431199997,44.19550473000004],[-89.40907868499994,44.062202365000076],[-89.46353836599997,43.97611732300004],[-89.52231417699994,43.84535617900008],[-89.61778027599996,43.714690304000044],[-89.61862904799995,43.58068715400003],[-89.63133566399995,43.51223566800007],[-89.64650687999995,43.489278623000075],[-89.65395753799999,43.47381582500003],[-89.65562699999998,43.46786485700005],[-89.64420308899997,43.46366067400004],[-89.62054618899998,43.454650592000064],[-89.59280915899996,43.445621147000054],[-89.58961590999996,43.43429326300003],[-89.59053758499994,43.418810834000055],[-89.60365740899994,43.41170978300005],[-89.61922482999995,43.40461539100005],[-89.63975289199999,43.38681364400003],[-89.64634494899997,43.37670885000006],[-89.66005232599997,43.26149861600004],[-89.64416883099994,43.189975169000036],[-89.62028321799994,43.10353141100006],[-89.52739889699996,43.025751985000056],[-89.41062367299998,42.92692783200005],[-89.22966987099994,42.81267774100007],[-89.08106692699994,42.74010143000004],[-88.89108348599996,42.74437607300007],[-88.72152701899995,42.73665197300005],[-88.57645541499994,42.72004883100004],[-88.50470091799997,42.68041611700005],[-88.47805149999994,42.61454139600005],[-88.51623902899996,42.53462594000007],[-88.51376561899997,42.469068564000054],[-88.49063632899998,42.42706799600006],[-88.42640710399996,42.42322565300003],[-88.40759431399994,42.37233197300003],[-88.40145018499999,42.297784206000074],[-88.40688639399997,42.24126795500007],[-88.42068903899997,42.169973568000046],[-88.45851961999995,42.09602334600004],[-88.51532658799994,42.06102897300008],[-88.60486882299995,41.98768590000003],[-88.65389659599998,41.934654660000035],[-88.75505384899998,41.86132745900005],[-88.81994656299997,41.79945801400004],[-89.00373356199998,41.75651651800007],[-89.19541624399994,41.698441168000045],[-89.30330454999995,41.64552535200005],[-89.43072645099994,41.60750068900006],[-89.51848761599996,41.54832214700008],[-89.60209058699996,41.49501957700005],[-89.61431278599997,41.43845939100004],[-89.59871619099994,41.39967817400003],[-89.55537857599995,41.37270713600003],[-89.53991625099997,41.32200163400006],[-89.56799094999997,41.259548660000064],[-89.59592013199995,41.21198348300004],[-89.63944695099997,41.188294530000064],[-85.34806824499998,41.094827931000054],[-84.80705101099994,47.59178962500005],[-93.21595578199998,47.65961917000004],[-93.05854195699999,44.96821993800006],[-93.06107369799997,44.96653938500003]]]},"properties":{"OBJECTID_1":1,"OBJECTID":1,"Years_Ago":24000,"SHAPE_Leng":3034250.36063,"Shape_Le_1":33.0014683974,"Shape_Area":35.7394984299,"filename":"24000.jpg"}}
            ]},

        shape_style: 
            g24000 = L.geoJSON(Toe_24000, 
            {
            style:  {color:"#984ea3"}
            }
),
            shape_listener:
                g24000.on({
                click: function(){
                $("#panel").html(Toe_24000.features[0].properties.Years_Ago +" Years Ago" + info24000 + glacierInfo + selfPlug);
                }
                }),
      },

      glacier_6: {
        center: [45.5, -89.5],
        zoom: 7,
        description: "Glacier six",
        // add title, shapes etc here
        /*Glacier 27500*/
        shape: 
            Toe_27500 = {"type":"FeatureCollection", "features": [
            {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-93.04609767599999,44.92329906300006],[-92.84229353699999,44.97142972300003],[-92.67635145599996,45.08262100800005],[-92.54855031399995,45.15699806900005],[-92.35459637099996,45.22904221600004],[-92.23657854099997,45.31358301500006],[-92.10168376299998,45.362588033000065],[-91.89654079199994,45.44120074500006],[-91.63587666099994,45.552403242000025],[-91.43510812899996,45.65512662200007],[-91.37496118699994,45.69516118700005],[-91.25678763799999,45.65365558600007],[-91.12817925999997,45.59069732300003],[-91.04123471999998,45.566516903000036],[-90.91352603399997,45.53188655300005],[-90.73023972499999,45.50819906900006],[-90.55747243299999,45.505600568000034],[-90.40013657599997,45.52769400900007],[-90.25794591799996,45.55310974400004],[-90.13600899599999,45.592615169000055],[-90.04955611299994,45.64626926100004],[-89.93755557599997,45.603395883000076],[-89.81541479499998,45.603263826000045],[-89.74413405799999,45.61027094900004],[-89.63194923799995,45.64211490500003],[-89.49903325599996,45.69876504300004],[-89.43753928399997,45.730628669000055],[-89.32126700299995,45.64426376800003],[-89.24002860699994,45.625890938000055],[-89.16918030799997,45.596819467000046],[-89.03774792599995,45.545775744000025],[-88.92632618399995,45.52334880700005],[-88.76959684799994,45.48604453400003],[-88.60765357099996,45.46275087600003],[-88.39512480599996,45.43852765200006],[-88.60556934199997,45.341263567000055],[-88.67315606899996,45.267047081000044],[-88.78112858399999,45.186082836000026],[-88.91912526099998,45.10173094900006],[-89.01636488799994,45.02043991600004],[-89.09309822099999,44.94604928500007],[-89.15477062699995,44.85720472500003],[-89.22589999699994,44.79697222100003],[-89.24708372299995,44.71136667900004],[-89.27851848399996,44.60081094800006],[-89.27440676299994,44.52932658000003],[-89.24065214299998,44.436210018000054],[-89.21733988099999,44.31456955700003],[-89.18822204399999,44.26077004600006],[-89.21474231699995,44.13589550000006],[-89.38945062599998,44.03333955200003],[-89.45491551399994,43.91575220400006],[-89.49509344499995,43.84089652100005],[-89.51567820999998,43.737356943000066],[-89.52177098199996,43.59086989800005],[-89.47881740699995,43.44059213400004],[-89.42149816899996,43.27950152500006],[-89.29699968699998,43.04650820400008],[-89.11380462499994,42.909428528000035],[-88.84285017699995,42.83910560600003],[-88.59046310799994,42.83270248400004],[-88.50230745099998,42.863748273000056],[-88.44195364799998,42.75215117500005],[-88.39231715999995,42.60850550300006],[-88.34252183599995,42.47912966900003],[-88.39516445299995,42.308319726000036],[-88.46515831999994,42.20205081000006],[-88.55475415799998,42.06739034000003],[-88.70524197299994,41.97982664800003],[-88.84697363899994,41.824059394000074],[-88.94017212099999,41.67839803800007],[-89.00888886999996,41.55032181300004],[-89.09632605299998,41.42234965800003],[-89.13545418499996,41.33685361500005],[-89.21783215499994,41.19087024100003],[-85.34496275399994,41.088647164000065],[-84.81541903699997,47.58550078800005],[-93.21220401999994,47.655914781000035],[-93.05879392699995,44.92248304300006],[-93.04609767599999,44.92329906300006]]]},"properties":{"OBJECTID_1":1,"OBJECTID":1,"Years_Ago":27500,"SHAPE_Leng":2984589.95454,"Shape_Le_1":32.3931138132,"Shape_Area":34.4347324387,"filename":"27500.jpg"}}
            ]},

        shape_style: 
        g27500 = L.geoJSON(Toe_27500, 
        {
        style:  {color:"#ff7f00"}
        }
    ),
        shape_listener:
            g27500.on({
            click: function(){
            $("#panel").html(Toe_27500.features[0].properties.Years_Ago +" Years Ago"+ info27500 + glacierInfo + selfPlug);
            }
            }),
      },

      glacier_7: {
        center: [45.5, -89.5],
        zoom: 7,
        description: "Glacier seven",
        // add title, shapes etc here
        shape: 
            Toe_31500= {"type":"FeatureCollection", "features": [
            {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-88.94034222699997,47.69506441000004],[-88.86203356199997,47.66384165200003],[-88.71649329399997,47.620405074000075],[-88.63833310199999,47.592839594000054],[-88.56525794299995,47.58813950900003],[-88.48121654799996,47.57372506400003],[-88.37179208599997,47.56270050200004],[-88.25123203499999,47.54949741300004],[-88.10536972299997,47.53765662200004],[-87.97377622699997,47.52207368900008],[-87.87939467599995,47.491796296000075],[-87.82402028099995,47.47171143200006],[-87.83120048899997,47.43375339900007],[-87.86950923899997,47.388758851000034],[-87.89942655699997,47.34169308700007],[-87.91839749299999,47.28680195100003],[-87.93240493599995,47.21467495700006],[-87.93205309999996,47.15181105200003],[-87.93793493199996,47.07191575200005],[-87.93552274199999,46.989965090000055],[-87.92960276099996,46.92699844300006],[-87.80765713099998,46.809323498000026],[-87.65242863199995,46.670517450000034],[-87.59465262099997,46.569306261000065],[-87.52756444699997,46.45000336500004],[-87.53496417499997,46.285853821000046],[-87.57497158099994,46.07953194300006],[-87.66696719899994,45.96714038400006],[-87.77051323699999,45.81203294800008],[-87.92645810299996,45.684226884000054],[-87.98183861899997,45.56137922900007],[-88.03037363199996,45.433621439000035],[-88.06543150499994,45.29846806000006],[-88.05953242499999,45.17452083200004],[-88.02850315599994,45.00012286200007],[-88.05847768799998,44.90774714100007],[-88.09433437799999,44.83689699000007],[-88.10522561699997,44.627672810000035],[-88.14424716599996,44.55447433300003],[-88.14583451299995,44.50447938700006],[-88.09083578599996,44.45593384800003],[-88.03220748899997,44.419208893000075],[-87.95597824799995,44.41310569700005],[-87.89500308099997,44.44534536300006],[-87.82048599199999,44.482058394000035],[-87.74550903399995,44.52824111100006],[-87.69409836699998,44.565324959000066],[-87.59588835899996,44.60379120300007],[-87.54228994099998,44.60979541100005],[-87.51624805299997,44.59494031300005],[-87.52150082299994,44.549798242000065],[-87.55736859099994,44.48864132500006],[-87.57081176699995,44.38183940500005],[-87.55600190999996,44.33864762500008],[-87.61925503299994,44.251850009000066],[-87.68325005599996,44.14121045600007],[-87.71318289599998,44.05129478100008],[-87.76973994799994,43.952364411000076],[-87.76591387799994,43.87844304300006],[-87.74219342299995,43.80889363400007],[-87.69380552999996,43.784105115000045],[-87.64443006299996,43.78547978700004],[-87.59100252099995,43.80580512200004],[-87.47407526399996,43.84854017300006],[-87.36038086899998,43.88884741900006],[-87.20881070299998,43.89000742400003],[-86.81637291699997,43.89879578500006],[-86.67864512099999,43.82817339500008],[-86.55026458299994,43.829130045000056],[-86.45594440899998,43.92152260900008],[-86.39799697999996,44.00784329700008],[-86.37276254999995,44.04277405800008],[-86.38348326699997,44.08360832300008],[-86.27798412899995,44.28982797900005],[-86.19757309199997,44.353869633000045],[-86.15521742799996,44.44296195700008],[-86.07554039499996,44.54028677100007],[-85.93768277199996,44.60691446700008],[-85.69440407799999,44.65038674700003],[-85.50404255899997,44.75666949300006],[-85.34404008299998,44.91697014700003],[-85.24578938899998,45.05105576300008],[-85.17000882299999,45.15266573700006],[-84.99696402599994,45.283339340000055],[-84.80185628799995,47.58957797900007],[-88.94571368699997,47.70265269300006],[-88.94034222699997,47.69506441000004]]]},"properties":{"OBJECTID_1":1,"OBJECTID":2,"Years_Ago":31500,"SHAPE_Leng":1478866.18087,"Shape_Le_1":15.9994195189,"Shape_Area":9.83976333148,"filename":"31500.jpg"}}
            ]},
          
        shape_style: 
            g31500 = L.geoJSON(Toe_31500,
             {
                style:{color:"#a65628"}
            }
        ),
        shape_listener:
             g31500.on({
            click: function(){
                
                $("#panel").html(Toe_31500.features[0].properties.Years_Ago +" Years Ago"+ info31500 + glacierInfo + selfPlug)
            }
            }),
      },
};

var overlayMaps = {
    "31500 years ago":g31500,
    "27500 years ago":g27500,
    "24000 years ago":g24000,
    "20500 years ago":g20500,
    "17000 years ago":g17000,
    "14600 years ago":g14600,
    "11000 years ago":g11000
    
    }; 
    
    var glacierLayers = L.control.layers(null,overlayMaps).addTo(map);

var initMap = (EL) => {
    var id = EL.dataset.map; // rerturns i.e: "glacier_1"
    var data = glacier_map_Data[id];
    var map = L.map(EL).setView(data.center,data.zoom);
    L.titleLayer(basemapTile,basemapOptions).addTo(map);
};

var ELS_map = document.querySelectorAll("[glacier-data]");
ELS_map.forEach(initMap)