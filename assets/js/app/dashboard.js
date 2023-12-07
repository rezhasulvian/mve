/**
 * Created by User on 31/08/2021.
 */

var kecSelector, kelSelector, kecVotSeletor, kelVotSelector;

const primary = '#6993FF';
const success = '#1BC5BD';
const info = '#8950FC';
const warning = '#FFA800';
const danger = '#F64E60';
const light = "#fff";

function Dashboard() {
    var self = this;

    self.init = function() {

        kecSelector = $('#sKecId').select2({
            width: '100%',
            placeholder: "Silahkan pilih Kecamatan"
        });

        kelSelector = $('#sKelId').select2({
            width: '100%',
            placeholder: "Silahkan pilih kelurahan"
        });

        // kecVotSelector = $('#sKecVotId').select2({
        //     width: '100%',
        //     placeholder: "Silahkan pilih Kecamatan"
        // });

        // kelVotSelector = $('#sKelVotId').select2({
        //     width: '100%',
        //     placeholder: "Silahkan pilih kelurahan"
        // });

        $('#sKelId').attr('disabled', true);
        $('#sKelVotId').attr('disabled', true);


        var date = new Date();

        var dateName = moment().format("DD MMMM YYYY");
        var monthName = moment().format("MMMM YYYY");
        var timeName = moment().format("HH:mm");

        pCurrDate = moment(date).format("dd MM yyyy");
        pCurrMonth = moment(date).format("MM yyyy");


        $('#sDate').datepicker({
            format: 'dd MM yyyy',
            todayHighlight: true,
            autoclose: true,
            orientation: 'auto bottom',
        });

        $('#sDate').datepicker({dateFormat: 'dd MM yyyy'}).datepicker("setDate", pCurrDate);

        $('#dateInfo').text("DPRD Kabupaten / Kota" + " " + dateName + " Pukul " + timeName + " WIB");
        $('#dateInfoV').text("DPRD Kabupaten / Kota" + " " + dateName + " Pukul " + timeName + " WIB");


        // $('#sDate').flatpickr("defaultDate", pCurrDate);

        loadVotingChart(44, 55, 13, 43, 22, 10, 50, 34, 25, 30, 35, 20);
        loadKtpKec();
        loadKtpCollect();
        loadKtpTarget();
        // loadKtpKel();


        $('#sDate').on("change", function () {

            loadVotingChart(55, 44, 10, 10, 22, 10, 50, 22, 25, 30, 25, 50);
            loadKtpKec();
            // loadKtpKel();

            if ($('#sKecId').val() == "") {
                $('#dateInfo').text("DPRD Kabupaten / Kota" + " " + this.value + " Pukul " + timeName + " WIB");
                $('#dateInfoV').text("DPRD Kabupaten / Kota" + " " + this.value + " Pukul " + timeName + " WIB");
            } else {
                $('#dateInfo').text($('#sKecId').val() + " " + this.value + " Pukul " + timeName + " WIB");
                $('#dateInfoV').text($('#sKecId').val() + " " + this.value + " Pukul " + timeName + " WIB");
            }

        });

        $('#sKecId').change(function() {
            $('#sKelId').attr('disabled', false);
        });

        // $('#sKecVotId').change(function() {
        //     $('#sKelVotId').attr('disabled', false);
        // });

        $('#searchGroupingBtn').on('click', function(e) {
            e.preventDefault();
            if ($('#sKecId').val() == "" && $('#sKelId').val() == ""){
                // loadKtpKec();
                Swal.fire({
                    position: "top-right",
                    icon: "warning",
                    title: "Pilih kecamatan terlebih dahulu!",
                    showConfirmButton: false,
                    timer: 1500
                });
                // console.log("kecamatan dan kelurahan kosong")
            }
            else if($('#sKelId').val() == "") {
                console.log($('#sKecId').val())

                $('#dateInfo').text($('#sKecId').val() + " " + dateName + " Pukul " + timeName + " WIB");
                $('#dateInfoV').text($('#sKecId').val() + " " + dateName + " Pukul " + timeName + " WIB");

                loadKtpKec();
                // console.log("kecamatan isi dan kelurahan kosong")
            }
            else {
                // loadKtpKel();

                $('#dateInfo').text($('#sKecId').val() + " - " + $('#sKelId').val() + " " + dateName + " Pukul " + timeName + " WIB");
                $('#dateInfoV').text($('#sKecId').val() + " - " + $('#sKelId').val() + " " + dateName + " Pukul " + timeName + " WIB");

                console.log("Kecamatan dan kelurahan isi")
            } 
        });
    }
}


function loadVotingChart() {
    const apexChart = "#votingChartId";
    var options = {
        series: [25251, 17913, 342989, 239988, 200670],
        chart: {
            width: 500,
            type: 'pie',
        },
        legend: {
            position: 'right',

        },
        noData: {
            text: "No Data",
            align: "center",
            verticalAlign: "middle",
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 350
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        colors: [primary, success, warning, danger, info],
        stroke: {
            width: 0
        },
        dataLabels: {
            dropShadow: true,
            style: {
                fontSize: '20px',
                fontWeight: 'bold',
            },
            background: {
                enabled: true,
                foreColor: 'black',
                opacity: 1,
                padding: 10,
                borderRadius: 5,
                borderWidth: 0,
                borderColor: 'black'
            },
            offsetX: 0,
            offsetY: 100,
        },
        labels: ['Grogol Pertamburan', 'Taman Sari', 'Kebon Jeruk', 'Palmerah', 'Kembangan'],
        plotOptions: {
        pie: {
            startAngle: 0,
            endAngle: 360,
            expandOnClick: true,
            offsetX: 0,
            offsetY: 0,
            customScale: 1,
            dataLabels: {
                offset: 0,
                minAngleToShowLabel: 10
            }, 
            donut: {
              size: '65%',
              background: 'transparent',
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '22px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  color: "#373d3f",
                  offsetY: -10,
                  formatter: function (val) {
                    return val
                  }
                },
                value: {
                  show: true,
                  fontSize: '18px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 500,
                  color: undefined,
                  offsetY: 16,
                  formatter: function (val) {
                    return val
                  }
                },
                total: {
                  show: true,
                  showAlways: false,
                  label: 'Total',
                  fontSize: '22px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  color: '#373d3f',
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b
                    }, 0)
                  }
                }
              }
            },      
          }
        },
        legend: {
            formatter: function(seriesName, opts) {
                return [seriesName, ": ", opts.w.globals.seriesTotals[opts.seriesIndex]]
            }
        }
    };

    // document.getElementById("doChangeVoting").innerHTML = '<div id="votingChartId"></div>';


    var chart = new ApexCharts(document.querySelector(apexChart), options);
    chart.render();
}

function loadKtpKec() {
    const apexChart = "#ktpKecChartId";
    var options = {
            series: [{
                name: 'KTP Pemilih',
                type: 'column',
                data: [179843, 97635, 268985, 171657, 226690],
                color: primary
            }, {
                name: 'KTP Terkumpul',
                type: 'line',
                data: [13245, 3311, 23179, 13245, 19868],
                color: success
            }, {
                name: 'Target',
                type: 'line',
                data: [37784, 37784, 37784, 37784, 37784],
                color: danger
            }],
            chart: {
                height: 350,
                type: 'line',
                stacked: false
            },
            noData: {
                text: "No Data",
                align: "center",
                verticalAlign: "middle",
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [0]
            },
            stroke: {
                width: [1, 4, 4]
            },
            markers: {
              size: [0, 4, 7]
            },
            // title: {
            //     text: 'XYZ - Stock Analysis (2009 - 2016)',
            //     align: 'left',
            //     offsetX: 110
            // },
            xaxis: {
                categories: ['Grogol Pertamburan', 'Taman Sari', 'Kebon Jeruk', 'Palmerah', 'Kembangan'],
            },
            yaxis: [
                {
                    axisTicks: {
                        show: true,
                    },
                    // axisBorder: {
                    //     show: true,
                    //     color: primary
                    // },
                    // labels: {
                    //     style: {
                    //         colors: primary,
                    //     }
                    // },
                    // title: {
                    //     text: "KTP Terkumpul",
                    //     style: {
                    //         color: primary,
                    //     }
                    // },
                    tooltip: {
                        enabled: true
                    }
                },
                
            ],
            tooltip: {
                fixed: {
                    enabled: true,
                    position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                    offsetY: 30,
                    offsetX: 60
                },
                x: {
                // formatter: function (x) {
                //     if(typeof x !== "undefined") {
                //         return "Kecmatan: " +  x.toFixed(0) ;
                //     }
                //     return x;

                // }
            }
            },
            legend: {
                horizontalAlign: 'center',
                offsetX: 40,
                formatter: function(seriesName, opts) {
                    // console.log(opts)

                    // var sum = 0;
                    // for (i = 0; i<= opts.w.globals.series; i++) {
                    //     sum += opts.w.globals.series[i];
                    // }
                    // console.log(sum);
                    return [seriesName, ": ", opts.w.globals.seriesTotals[opts.seriesIndex]]
                }
            }
        };

        document.getElementById("doChangeKtpKec").innerHTML = '<div id="ktpKecChartId"></div>';

        var chart = new ApexCharts(document.querySelector(apexChart), options);
        chart.render();
}

function loadKtpCollect () {
        const apexChart = '#ktpCollectChart'

        var options = {
            series: [350],
            chart: {
                height: 200,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 0,
                        size: "65%"
                    },
                    dataLabels: {
                        showOn: "always",
                        name: {
                            show: false,
                            fontWeight: '700',
                            fontSize: '12px'
                        },
                        value: {
                            color: '#5E6278',
                            fontSize: "22px",
                            fontWeight: '700',
                            offsetY: 12,
                            show: true,
                            formatter: function (val) {
                                return val + '%';
                            }
                        }
                    },
                    track: {
                        background: KTApp.getSettings()['colors']['theme']['light']['danger'],
                        strokeWidth: '100%'
                    }
                }
            },
            // colors: [KTApp.getSettings()['colors']['theme']['base']['success']],
            stroke: {
                lineCap: "round",
            },
            labels: ["KTP Terkumpul"],
            colors: [danger]
        };

        var chart = new ApexCharts(document.querySelector(apexChart), options);
        chart.render();
    }

function loadKtpTarget () {
        const apexChart = '#ktpTargetChart'

        var options = {
            series: [20],
            chart: {
                height: 200,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 0,
                        size: "65%"
                    },
                    dataLabels: {
                        showOn: "always",
                        name: {
                            show: false,
                            fontWeight: '700',
                            fontSize: '12px'
                        },
                        value: {
                            color: '#5E6278',
                            fontSize: "22px",
                            fontWeight: '700',
                            offsetY: 12,
                            show: true,
                            formatter: function (val) {
                                return val + '%';
                            }
                        }
                    },
                    track: {
                        background: KTApp.getSettings()['colors']['theme']['light']['success'],
                        strokeWidth: '100%'
                    }
                }
            },
            colors: [KTApp.getSettings()['colors']['theme']['base']['success']],
            stroke: {
                lineCap: "round",
            },
            labels: ["KTP Target"]
        };

        var chart = new ApexCharts(document.querySelector(apexChart), options);
        chart.render();
    }


// function loadKtpKel() {
//     const apexChart = "#ktpKelChartId";
//     var options = {
//             series: [{
//                 name: 'KTP Pemilih',
//                 type: 'column',
//                 data: [500, 300, 200, 300, 200, 280, 650, 460],
//                 color: primary
//             }, {
//                 name: 'KTP Terkumpul',
//                 type: 'line',
//                 data: [200, 300, 100, 150, 200, 220, 380, 35],
//                 color: success
//             }, {
//                 name: 'Target',
//                 type: 'line',
//                 data: [100, 200, 100, 200, 200, 110, 500, 400],
//                 color: danger
//             }],
//             chart: {
//                 height: 350,
//                 type: 'line',
//                 stacked: false
//             },
//             noData: {
//                 text: "No Data",
//                 align: "center",
//                 verticalAlign: "middle",
//             },
//             dataLabels: {
//                 enabled: false,
//                 enabledOnSeries: [1]
//             },
//             stroke: {
//                 width: [1, 4, 4]
//             },
//             markers: {
//               size: [4, 7]
//             },
//             // title: {
//             //     text: 'XYZ - Stock Analysis (2009 - 2016)',
//             //     align: 'left',
//             //     offsetX: 110
//             // },
//             xaxis: {
//                 categories: ['Balaraja', 'Cikupa', 'Cisauk', 'Cisoka', 'Curug', 'Jambe', 'Jayanti', 'Kelapa Dua'],
//             },
//             yaxis: [
//                 {
//                     axisTicks: {
//                         show: true,
//                     },
//                     // axisBorder: {
//                     //     show: true,
//                     //     color: primary
//                     // },
//                     // labels: {
//                     //     style: {
//                     //         colors: primary,
//                     //     }
//                     // },
//                     // title: {
//                     //     text: "KTP Terkumpul",
//                     //     style: {
//                     //         color: primary,
//                     //     }
//                     // },
//                     tooltip: {
//                         enabled: true
//                     }
//                 },
                
//             ],
//             tooltip: {
//                 fixed: {
//                     enabled: true,
//                     position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
//                     offsetY: 30,
//                     offsetX: 60
//                 },
//                 x: {
//                 // formatter: function (x) {
//                 //     if(typeof x !== "undefined") {
//                 //         return "Kecmatan: " +  x.toFixed(0) ;
//                 //     }
//                 //     return x;

//                 // }
//             }
//             },
//             legend: {
//                 horizontalAlign: 'left',
//                 offsetX: 40
//             }
//         };

//         document.getElementById("doChangeKtpKel").innerHTML = '<div id="ktpKelChartId"></div>';

//         var chart = new ApexCharts(document.querySelector(apexChart), options);
//         chart.render();
// }

