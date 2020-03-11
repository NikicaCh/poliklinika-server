module.exports = ({ body }) => {

return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
            .document {
                width: auto;
                height: auto;
                padding: 6% 10% 6% 10%;
            }
    
            .title {
                font-size: 12Wpx;
                text-align: center;
                font-widht: 100;
                padding: 15% 5% 2% 5%;
                margin-bottom: 2%;
            }
            .title2 {
                font-size: 12px;
                text-align: center;
                font-widht: 100;
                padding: 2% 5% 2% 5%;
                margin-bottom: 2%;
            }
            .centarl {
                text-align: center;
            }
            .top {
                position: absolute;
                top: 5%;
                font-size: 8px;
                line-height: 2px;
                text-align: center;
                margin-bottom: 10%;
            }
            .left {
                width: 60%;
                left: 5%;
            }
            .right {
                width: 30%;
                right: 5%;
            }
            .b-left {
                position: absolute;
                width: 30%;
                left: 10%;
                text-align: center;
            }
            .b-right {
                position: absolute;
                width: 40%;
                right: 0;
                text-align: center;
            }
            .small {
                font-size: 4px;
                line-height: -2px;
            }
          </style>
       </head>
       <div id={"hello"} class="document">
            <div class="top left">
                <p>ПОЛИКЛИНИКА ПЗУ Д-р ЃОШЕ</p>
                <p class="small">(овластена здравствена установа за медицина на труд)</p>
                <p>Октомвриска Револуција бр.24 - Куманово, КУМАНОВО</p>
                <p class="small">(адреса)</p>
            </div>
            
            <div class="top right">
                <p>05.03.2020 </p>
                <p class="small">(датум на прегледот)</p>
                <p>-<p>
                <p class="small">(број на амбулантниот протокол)</p>
                <p>3655</p>
                <p class="small">(број на здравствен картон)</p>
            </div>
            
            <br />
            <br />
            <br />
            <br />
            <br />

            <h1 class="title">ИЗВЕШТАЈ ЗА ПЕРИОДИЧЕН/НАСОЧЕН/СИСТЕМАТСКИ ЗДРАВСТВЕН ПРЕГЛЕД</h1>
            <p>Врз основа на упатот за претходен преглед бр. ______________ од ___________ година</p>
            <p> Извршен е преглед на <strong>${body.name} ${body.lastName}</strong>
            </p>
            <p> роден/а <strong>${body.age}</strong> по професија <strong>${body.education}</strong>
            </p>
            <p> кој/а работи на работно место <strong>${body.position}</strong></p>
            <p> Врз основа на извршените прегледи во согласност со правилникот на видот, начинот 
                и обемот на здравствени прегледи на вработените ( Службен весник на РМ бр. 171/10 ) се дава
            </p>
            <h1 class="title2">МИСЛЕЊЕ</h1>

            <p> 1.Патолошки состојби
                (дијагнози)
            </p>
            <p>
                2.Препораки за вработениот
            </p>
            <p>
                3.Препораки за работодавачот и податоци за постоење на професионални болести во врска со работата
            </p>
            <p>
                4.Оценка на работната способност/Наод и МИСЛЕЊЕ.
                Кај именуваниот ПОСТОИ патолошка состојба
                која НЕ ПРЕТСТАВУВА контраиндикација за работа, односно работни задачи.
                <br />
                РАБОТНИКОТ Е СПОСОБЕН 
                ЗА ЗАНИМАЊЕТО КОЕ ГО ОБАВУВА
                <br />
                <br />
                Забелешка:
                <br />
                <br />
                <br />
            </p>
            <p class="centarl">(МП)</p>
            <div class="b-left">
                Куманово,  05.03.2020
                <p class="small">(место и датум)</p>
            </div>
            <div class="b-right">
                <p>___________________________<p>
            </div>

        </div>
    </html>
    `;
};