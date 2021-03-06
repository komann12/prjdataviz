let first_viz_done = false;
let firt_viz_created= false;

function presentation_viz1(){
    //step1_items.classed("invisible", true);
}

function prediction_viz1(){
    if (!firt_viz_created) {
        create_first_viz("#viz1_svg", "https://komann12.github.io/Scrollytelling_indicateurs_environnement/data/viz_1/ER.H2O.INTR.PC.json");
        firt_viz_created = true;
    }

    step1_items.classed("invisible", false);
}

function resultat_viz1(){
    const svg = d3.select("#viz1_svg")
    draw_first_viz(svg, monde_data_original);
    if (first_viz_done === false) {
        let bet_val = document.getElementById("bet-select").value
        if(bet_val === "dec") {
            current_score += 1;
        } else {
            current_score -= 1;
        }
        document.getElementById("curscore-span").innerText = `Vous avez ${current_score} point(s)`;
        first_viz_done = true;
    }
    d3.select(".exp2").classed("invisible", false);
}

function aller_plus_loin_viz1(){
    dataviz1.classed("invisible", false);
    dataviz1.selectAll(".step-4").classed("invisible", false);
    d3.select(".exp3").classed("invisible", false);
}

function transition_viz1(){
    dataviz1.classed("invisible", true);
    dataviz2.classed("invisible", true);
}

function presentation_viz2(){
    dataviz2.classed("invisible", false);
    if(!second_viz_done) {
        step2_items.classed("invisible", true);
    }
}

function prediction_viz2(){
    step2_items.classed("invisible", false);
    document.getElementById("curscore-span2").innerText = `Vous avez ${current_score} point(s)`;
}

function resultat_viz2(){
    const svg = d3.select("#viz2_svg");
    draw_second_viz(svg, france_data_original2);
    if (second_viz_done === false) {
        let bet_val = document.getElementById("bet-select2").value
        if(bet_val === "same") {
            current_score += 1;
        } else {
            current_score -= 1;
        }
        document.getElementById("curscore-span2").innerText = `Vous avez ${current_score} point(s)`;
        second_viz_done = true;
    }
    d3.select(".exp4").classed("invisible", false);
}

function aller_plus_loin_viz2(){
    dataviz2.classed("invisible", false);
    document.body.style.backgroundColor = "#0D3D56";
    document.getElementById("scrolly").style.backgroundColor = "#0D3D56";
    d3.select(".exp5").classed("invisible", false);
}

function transition_viz2(){
    dataviz2.classed("invisible", true);
    diag.classed("invisible", true);
    dataviz3.classed("invisible", true);
    step3_items.classed("invisible", true);
    document.body.style.backgroundColor = "#829356";
    document.getElementById("scrolly").style.backgroundColor = "#829356";
}

function presentation_viz3(){
    dataviz3.classed("invisible", false);
    if(!third_viz_done) {
        step3_items.classed("invisible", true);
    }
}

function prediction_viz3(){
    step3_items.classed("invisible", false);
    document.getElementById("curscore-span3").innerText = `Vous avez ${current_score} point(s)`;
}

function resultat_viz3(){
    diag.classed("invisible", false);
    const svg = d3.select("#viz3_svg");
    if (third_viz_done === false) {
        let bet_val = document.getElementById("france").checked
        if(bet_val === true) {
            current_score += 1;
        } else {
            current_score -= 1;
        }
        document.getElementById("curscore-span3").innerText = `Vous avez ${current_score} point(s)`;
        third_viz_done = true;
    }
    d3.select(".exp6").classed("invisible", false);
}

function aller_plus_loin_viz3(){
    dataviz3.classed("invisible", false);
    step3_items.classed("invisible", false);
    document.body.style.backgroundColor = "#829356";
    document.getElementById("scrolly").style.backgroundColor = "#829356";
}

function transition_viz3(){
    document.body.style.backgroundColor = "#444B44";
    document.getElementById("scrolly").style.backgroundColor = "#444B44";
    dataviz3.classed("invisible", true);
    step3_items.classed("invisible", true);
    dataviz4.classed("invisible", true);
    step4_items.classed("invisible", true);
}

function presentation_viz4(){
    dataviz4.classed("invisible", false);
    step4_items.classed("invisible", true);
    document.getElementById("curscore-span4").innerText = `Vous avez ${current_score} point(s)`;
}

function prediction_viz4(){
    step4_items.classed("invisible", false);
}

function resultat_viz4(){
    dataviz4.select("#slidertime").classed("invisible", false)
    document.getElementById("explain-span4").innerText = "Et voilà ! Vous pouvez utiliser le slider pour" +
        " vérifier que c'est bien la Chine le deuxième pays générant le plus de CO2 dû aux imports.";
    if (fourth_viz_done === false) {
        if (pays_prediction === "China") {
            current_score += 1;
        } else {
            current_score -= 1;
        }
        document.getElementById("curscore-span4").innerText = `Vous avez ${current_score} point(s)`;
        fourth_viz_done = true;
    }
}

function aller_plus_loin_viz4(){
    document.body.style.backgroundColor = "#444B44";
    document.getElementById("scrolly").style.backgroundColor = "#444B44";
    dataviz4.classed("invisible", false);
    dataviz4.select("#slidertime").classed("invisible", true)
    create_fourth_viz("#viz4_svg", "https://komann12.github.io/Scrollytelling_indicateurs_environnement/data/viz_4/emissions_import_2015.csv",300)
    document.getElementById("explain-span4").innerText = "Les USA et la Chine écrasent les autrs pays avec leurs émissions de CO2." +
        " Si on change l'échelle et le scale des couleurs sans prendre en compte ces  2 outliers, voici le résultat:";
}

function transition_viz4(){
    document.body.style.backgroundColor = "#093145";
    document.getElementById("scrolly").style.backgroundColor = "#093145";
    dataviz4.classed("invisible", true);
    step4_items.classed("invisible", true);
    step5_items.classed("invisible", true);
    dataviz5.classed("invisible", true);
}

function presentation_viz5(){
    dataviz5.classed("invisible", false);
    diag2.classed("invisible",true);
    step4_items.classed("invisible", true);
}

function prediction_viz5(){
    step5_items.classed("invisible", false);
    document.getElementById("curscore-span5").innerText = `Vous avez ${current_score} point(s)`;
}

function resultat_viz5(){
    diag2.classed("invisible", false);
    document.getElementById("explain-span5").innerText = "Et voilà ! Vous pouvez utiliser le curseur pour" +
        " vérifier que de 1971 à 2014, on a environ 1933 KWH supplémentaires par habitant.";
    if (fifth_viz_done === false) {
        let bet_val5 = document.getElementById("r3").checked
        if (bet_val5 === true) {
            current_score += 1;
        } else {
            current_score -= 1;
        }
        document.getElementById("curscore-span5").innerText = `Vous avez ${current_score} point(s)`;
        fifth_viz_done = true;
    }
}

function aller_plus_loin_viz5(){
    dataviz5.classed("invisible", false);
    step5_items.classed("invisible", false);
    document.getElementById("finscore").innerText = `${current_score} points !`
}
