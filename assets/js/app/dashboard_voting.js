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

        $('#sKelId').attr('disabled', true);
        $('#sKelVotId').attr('disabled', true);

        var date = new Date();

        var dateName = moment().format("DD MMMM YYYY");
        var monthName = moment().format("MMMM YYYY");
        var timeName = moment().format("HH:mm");

        pCurrDate = moment(date).format("dd MM yyyy");
        pCurrMonth = moment(date).format("MM yyyy");

        $('#dateInfo').text("DPRD Kabupaten / Kota" + " " + dateName + " Pukul " + timeName + " WIB");
        $('#dateInfoV').text("DPRD Kabupaten / Kota" + " " + dateName + " Pukul " + timeName + " WIB");

        // $('#sDate').flatpickr("defaultDate", pCurrDate);

        loadVote();
        // loadVoteCollect();
        loadVoteTarget();

        $('#sKecId').change(function() {
            $('#sKelId').attr('disabled', false);

            if($('#sKecId').val() == "Grogol Pertamburan") {
                $('#sKelId').empty();
                function populate(selector) {
                  $(selector)
                    .append('<option lable="Label"></option>')
                    .append('<option value="Grogol">Grogol</option>')
                    .append('<option value="Jelambar">Jelambar</option>')
                    .append('<option value="Jelambar Baru">Jelambar Baru</option>')
                    .append('<option value="Tanjung Duren Selatan">Tanjung Duren Selatan</option>')
                    .append('<option value="Tanjung Duren Utara">Tanjung Duren Utara</option>')
                    .append('<option value="Tomang">Tomang</option>')
                    .append('<option value="Wijaya Kusuma">Wijaya Kusuma</option>')

                }

                populate('#sKelId');

            } else if($('#sKecId').val() == "Palmerah") {
                $('#sKelId').empty();
                function populate(selector) {
                  $(selector)
                    .append('<option lable="Label"></option>')
                    .append('<option value="Jatipulo">Jatipulo</option>')
                    .append('<option value="Kota Bambu">Kota Bambu</option>')
                    .append('<option value="Slipi">Slipi</option>')
                    .append('<option value="Palmerah">Palmerah</option>')
                    .append('<option value="Kemanggisan">Kemanggisan</option>')

                }

                populate('#sKelId');

            } else if($('#sKecId').val() == "Taman Sari") {
                $('#sKelId').empty();
                function populate(selector) {
                  $(selector)
                    .append('<option lable="Label"></option>')
                    .append('<option value="Pinangsia">Pinangsia</option>')
                    .append('<option value="Glodok">Glodok</option>')
                    .append('<option value="Keagungan">Keagungan</option>')
                    .append('<option value="Krukut">Krukut</option>')
                    .append('<option value="Taman Sari">Taman Sari</option>')
                    .append('<option value="Maphar">Maphar</option>')
                    .append('<option value="Tangki">Tangki</option>')
                    .append('<option value="Mangga Besar">Mangga Besar</option>')


                }

                populate('#sKelId');
            } else if($('#sKecId').val() == "Kembangan") {
                $('#sKelId').empty();
                function populate(selector) {
                  $(selector)
                    .append('<option lable="Label"></option>')
                    .append('<option value="Kembangan">Kembangan</option>')
                    .append('<option value="Meruya Ilir">Meruya Ilir</option>')
                    .append('<option value="Meruya Udik">Meruya Udik</option>')
                    .append('<option value="Srengseng">Srengseng</option>')
                    .append('<option value="Joglo">Joglo</option>')

                }

                populate('#sKelId');
            }
        });




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
            if($('#sKecId').val() == "Grogol Pertamburan") {

                $('#dateInfo').text($('#sKecId').val() + " " + dateName + " Pukul " + timeName + " WIB");
                loadVoteGro();
            } else if($('#sKecId').val() == "Palmerah") {
                $('#dateInfo').text($('#sKecId').val() + " " + dateName + " Pukul " + timeName + " WIB");
                loadVotePal();
            } else if($('#sKecId').val() == "Taman Sari") {
                $('#dateInfo').text($('#sKecId').val() + " " + dateName + " Pukul " + timeName + " WIB");
                loadVoteSari();
            }
            else if($('#sKecId').val() == "Kembangan") {
                $('#dateInfo').text($('#sKecId').val() + " " + dateName + " Pukul " + timeName + " WIB");
                loadVoteKemb();

                if ($('#sKelId').val() == "Joglo") {
                    $('#dateInfo').text($('#sKecId').val() + " - " + $('#sKelId').val() + " " + dateName + " Pukul " + timeName + " WIB");
                    loadVoteJog();
                }
            }
            // else if ($('#sKecId').val() == "Kembangan" && $('#sKelId').val() == "Joglo") {} {
            //     $('#dateInfo').text($('#sKecId').val() + " - " + $('#sKelId').val() + " " + dateName + " Pukul " + timeName + " WIB");
            //     loadVoteJog();
            // }
        });
    }
}

function loadVote() {
    const apexChart = "#voteChartId";
    var options = {
            series: [{
                name: 'Voting',
                type: 'column',
                data: [2575, 1500, 1700, 2700, 1900],
                color: primary
            }, {
                name: 'Target',
                type: 'line',
                data: [2500, 3200, 2700, 2230, 1800],
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

                    $('#voteInfo').text(opts.w.globals.seriesTotals[0])
                    $('#voteTargetInfo').text(opts.w.globals.seriesTotals[1])

                    var total = opts.w.globals.seriesTotals[0];
                    var target = opts.w.globals.seriesTotals[1];

                    loadVoteCollect(Math.round((total/target)*100))


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

        document.getElementById("doChangeVote").innerHTML = '<div id="voteChartId"></div>';

        var chart = new ApexCharts(document.querySelector(apexChart), options);
        chart.render();

}

function loadVoteGro() {
    const apexChart = "#voteChartId";
    var options = {
            series: [{
                name: 'Voting',
                type: 'column',
                data: [85, 95, 88, 98, 96, 77, 76],
                color: primary
            }, {
                name: 'Target',
                type: 'line',
                data: [100, 105, 110, 115, 120, 90, 95],
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
                categories: ['Grogol', 'Jelambar', 'Jelambar Baru', 'Tanjung Duren selatan', 'Tanjung Duren Utara', 'Tomang', 'Wijaya Kusuma'],
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

                     $('#voteInfo').text(opts.w.globals.seriesTotals[0])
                    $('#voteTargetInfo').text(opts.w.globals.seriesTotals[1])

                    var total = opts.w.globals.seriesTotals[0];
                    var target = opts.w.globals.seriesTotals[1];

                    loadVoteCollect(Math.round((total/target)*100))

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

        document.getElementById("doChangeVote").innerHTML = '<div id="voteChartId"></div>';

        var chart = new ApexCharts(document.querySelector(apexChart), options);
        chart.render();
}

function loadVotePal() {
    const apexChart = "#voteChartId";
    var options = {
            series: [{
                name: 'Voting',
                type: 'column',
                data: [85, 89, 94, 92, 102],
                color: primary
            }, {
                name: 'Target',
                type: 'line',
                data: [100, 105, 110, 115, 120],
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
                categories: ['Jatipulo', 'Kota Bambu', 'Slipi', 'Palmerah', 'Kemanggisan'],
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
                     $('#voteInfo').text(opts.w.globals.seriesTotals[0])
                    $('#voteTargetInfo').text(opts.w.globals.seriesTotals[1])

                    var total = opts.w.globals.seriesTotals[0];
                    var target = opts.w.globals.seriesTotals[1];

                    loadVoteCollect(Math.round((total/target)*100))
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

        document.getElementById("doChangeVote").innerHTML = '<div id="voteChartId"></div>';

        var chart = new ApexCharts(document.querySelector(apexChart), options);
        chart.render();
}

function loadVoteSari() {
    const apexChart = "#voteChartId";
    var options = {
            series: [{
                name: 'Voting',
                type: 'column',
                data: [100, 117, 72, 86, 85, 84, 94, 92],
                color: primary
            }, {
                name: 'Target',
                type: 'line',
                data: [125, 130, 90, 95, 100, 105, 110, 115],
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
                categories: ['Pinangsia', 'Glodok', 'Keagungan', 'Krukut', 'Taman Sari', 'Maphar', 'Tangki', 'Mangga Besar'],
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
                     $('#voteInfo').text(opts.w.globals.seriesTotals[0])
                    $('#voteTargetInfo').text(opts.w.globals.seriesTotals[1])

                    var total = opts.w.globals.seriesTotals[0];
                    var target = opts.w.globals.seriesTotals[1];

                    loadVoteCollect(Math.round((total/target)*100))
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

        document.getElementById("doChangeVote").innerHTML = '<div id="voteChartId"></div>';

        var chart = new ApexCharts(document.querySelector(apexChart), options);
        chart.render();
}

function loadVoteKemb() {
    const apexChart = "#voteChartId";
    var options = {
            series: [{
                name: 'Voting',
                type: 'column',
                data: [54, 52, 63, 60, 64],
                color: primary
            }, {
                name: 'Target',
                type: 'line',
                data: [60, 65, 70, 75, 80],
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
                categories: ['Kembangan', 'Meruya Ilir', 'Meruya Udik', 'Srengseng', 'Joglo'],
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
                     $('#voteInfo').text(opts.w.globals.seriesTotals[0])
                    $('#voteTargetInfo').text(opts.w.globals.seriesTotals[1])

                    var total = opts.w.globals.seriesTotals[0];
                    var target = opts.w.globals.seriesTotals[1];

                    loadVoteCollect(Math.round((total/target)*100))
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

        document.getElementById("doChangeVote").innerHTML = '<div id="voteChartId"></div>';

        var chart = new ApexCharts(document.querySelector(apexChart), options);
        chart.render();
}


function loadVoteJog() {
    const apexChart = "#voteChartId";
    var options = {
            series: [{
                name: 'Voting',
                type: 'column',
                data: [19, 15, 31, 19, 19, 28, 19, 19, 28, 19,
                        19, 19, 22, 28, 28, 19, 19, 15, 19, 15,
                        19, 28, 19, 19, 19, 28, 17, 19, 19, 19,
                        15, 19, 28, 19, 19, 19, 19, 19, 19, 28,
                        19, 28, 20, 19, 28, 19, 19, 28, 28, 19 
                        ],
                color: primary
            }, {
                name: 'Target',
                type: 'line',
                data: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                        25, 25, 20, 25, 25, 25, 25, 20, 25, 20,
                        25, 25, 25, 25, 25, 25, 15, 25, 25, 25,
                        20, 25, 25, 25, 25, 25, 25, 25, 15, 25,
                        25, 25, 20, 25, 25, 25, 25, 25, 25, 25
                        ],
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
                categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                                '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                                '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
                                '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
                                '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
                            ],
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
                     $('#voteInfo').text(opts.w.globals.seriesTotals[0])
                    $('#voteTargetInfo').text(opts.w.globals.seriesTotals[1])

                    var total = opts.w.globals.seriesTotals[0];
                    var target = opts.w.globals.seriesTotals[1];

                    loadVoteCollect(Math.round((total/target)*100))
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

        document.getElementById("doChangeVote").innerHTML = '<div id="voteChartId"></div>';

        var chart = new ApexCharts(document.querySelector(apexChart), options);
        chart.render();
}


function loadVoteCollect (total) {
        const apexChart = '#voteCollectChart'

        var options = {
            series: [total],
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

        document.getElementById("doChangeCollect").innerHTML = '<div id="voteCollectChart"></div>';

        var chart = new ApexCharts(document.querySelector(apexChart), options);
        chart.render();
    }

function loadVoteTarget () {
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

