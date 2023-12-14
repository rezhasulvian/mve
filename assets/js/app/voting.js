var table, subdistrictSelector, wardSelector, tpsSelector

function Ktp() {
	var self = this;

	self.init = function() {

		var avatar1 = new KTImageInput('kt_image_1');

		var fileSelector = document.querySelector('#imgInput');

		$('#wardId').attr('disabled', true);
		$('#tpsId').attr('disabled', true);

		$('#subdistrictId').change(function() {
            $('#wardId').attr('disabled', false);

            if($('#subdistrictId').val() == "Grogol Pertamburan") {
                $('#wardId').empty();
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

                populate('#wardId');

            } else if($('#subdistrictId').val() == "Palmerah") {
                $('#wardId').empty();
                function populate(selector) {
                  $(selector)
                    .append('<option lable="Label"></option>')
                    .append('<option value="Jatipulo">Jatipulo</option>')
                    .append('<option value="Kota Bambu">Kota Bambu</option>')
                    .append('<option value="Slipi">Slipi</option>')
                    .append('<option value="Palmerah">Palmerah</option>')
                    .append('<option value="Kemanggisan">Kemanggisan</option>')

                }

                populate('#wardId');

            } else if($('#subdistrictId').val() == "Taman Sari") {
                $('#wardId').empty();
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

                populate('#wardId');
            } else if($('#sKecId').val() == "Kembangan") {
                $('#wardId').empty();
                function populate(selector) {
                  $(selector)
                    .append('<option lable="Label"></option>')
                    .append('<option value="Kembangan">Kembangan</option>')
                    .append('<option value="Meruya Ilir">Meruya Ilir</option>')
                    .append('<option value="Meruya Udik">Meruya Udik</option>')
                    .append('<option value="Srengseng">Srengseng</option>')
                    .append('<option value="Joglo">Joglo</option>')

                }

                populate('#wardId');
            }
        });

        $('#wardId').change(function() {
            $('#tpsId').attr('disabled', false);
        });
1
		var date = new Date();
		var pDateTime = moment(date).format("yyy MM dd HH:mm:ss");

		

		table = $('#dt-votings').DataTable({
			'dom': 'Bfrtip',
            'pageLength': 20,
            'responsive': true,
            "buttons": [
	            'copy', 'csv','excel', 'print'
	        ],
			'columnDefs': [
				// {
				// 	targets: 0,
				// 	render: function(data, type, full, meta) {

				// 		var output;
				// 		var stateNo = KTUtil.getRandomInt(0, 7);
				// 		var states = [
				// 			'success',
				// 			'light',
				// 			'danger',
				// 			'success',
				// 			'warning',
				// 			'dark',
				// 			'primary',
				// 			'info'];

				// 		var state = states[stateNo];

				// 		output = `
    //                         <div class="d-flex align-items-center">
    //                             <div class="symbol symbol-50 symbol-light-` + state + `" flex-shrink-0">
    //                                 <div class="symbol-label font-size-h5">` + full[0].substring(0, 1) + `</div>
    //                             </div>
    //                             <div class="ml-3">
    //                                 <span class="text-dark-75 font-weight-bold line-height-sm d-block pb-2">` + full[0] + `</span>
    //                             </div>
    //                         </div>`;

				// 		return output;
				// 	},
				// },
				// {
				// 	targets: 1,
				// 	render: function(data, type, full, meta) {
				// 		return '<a class="text-dark-50 text-hover-primary" href="mailto:' + data + '">' + data + '</a>';
				// 	},
				// },
				{
					targets: -1,
					title: 'Actions',
					orderable: false,
					render: function(data, type, full, meta) {
						return '\
							<div class="dropdown dropdown-inline">\
								<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" data-toggle="dropdown">\
	                                <i class="la la-cog"></i>\
	                            </a>\
							  	<div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
									<ul class="nav nav-hoverable flex-column">\
							    		<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-edit"></i><span class="nav-text">Edit Details</span></a></li>\
							    		<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-leaf"></i><span class="nav-text">Update Status</span></a></li>\
							    		<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-print"></i><span class="nav-text">Print</span></a></li>\
									</ul>\
							  	</div>\
							</div>\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Edit details">\
								<i class="la la-edit"></i>\
							</a>\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">\
								<i class="la la-trash"></i>\
							</a>\
						';
					},
				},
				{
					targets: 5,
					render: function(data, type, full, meta) {
						var status = {
							1: {'title': 'ACTIVE', 'class': ' label-light-success'},
							2: {'title': 'INACTIVE', 'class': ' label-light-danger'},
						};
						if (typeof status[data] === 'undefined') {
							return data;
						}
						return '<span class="label label-lg font-weight-bold' + status[data].class + ' label-inline">' + status[data].title + '</span>';
					},
				},
				{
					targets: 6,
					render: function(data, type, full, meta) {
						return '<span class="text-muted">' + data + '</span>';
					},
				},
				{
					targets: 7,
					render: function(data, type, full, meta) {
						return '<span class="text-muted">' + data + '</span>';
					},
				},
			],
		});

		subdistrictSelector = $('#form-data select[name="subdistrictId"]').select2({
            width: '100%',
            placeholder: "Silahkan pilih kecamatan",
            dropdownParent: $("#form-data")
        });

        wardSelector = $('#form-data select[name="wardId"]').select2({
            width: '100%',
            placeholder: "Silahkan pilih kelurahan",
            dropdownParent: $("#form-data")
        });

        tpsSelector = $('#form-data select[name="tpsId"]').select2({
            width: '100%',
            placeholder: "Silahkan pilih kelurahan",
            dropdownParent: $("#form-data")
        });


		$('#btnAdd').on('click', function(e) {
			e.preventDefault();

			$('#modal-data').modal({
				backdrop: 'static',
				keyboard: true,
				show: true
			});
		});

		$('#btnImage').on('click', function(e) {
			e.preventDefault();

			$('#imagePreview').attr('src', $('#imageResource').attr('src'));

			$('#imageModal').modal({
				backdrop: 'static',
				keyboard: true,
				show: true
			});
		});

		$('#btnImage2').on('click', function(e) {
			e.preventDefault();

			$('#imagePreview2').attr('src', $('#imageResource2').attr('src'));

			$('#imageModal2').modal({
				backdrop: 'static',
				keyboard: true,
				show: true
			});
		});

		$('#btnImage3').on('click', function(e) {
			e.preventDefault();

			$('#imagePreview3').attr('src', $('#imageResource3').attr('src'));

			$('#imageModal3').modal({
				backdrop: 'static',
				keyboard: true,
				show: true
			});
		});

		$('#btnImage4').on('click', function(e) {
			e.preventDefault();

			$('#imagePreview4').attr('src', $('#imageResource4').attr('src'));

			$('#imageModal4').modal({
				backdrop: 'static',
				keyboard: true,
				show: true
			});
		});

		$('#btnImage5').on('click', function(e) {
			e.preventDefault();

			$('#imagePreview5').attr('src', $('#imageResource5').attr('src'));

			$('#imageModal5').modal({
				backdrop: 'static',
				keyboard: true,
				show: true
			});
		});

		$('#submit').on('click', function(e) {
			e.preventDefault();

		    var code = $('#form-data input[name="code"]').val();
		    var voting = $('#form-data input[name="voting"]').val();

		    // var photo = $('#form-data input[name="photo"]').val();
		    var photo = '<div class="symbol-list d-fle x flex-wrap">' + 
                            '<div class="symbol symbol-40 symbol-lg-60 symbol-hover">' +
                                '<a href="#" id="btnImage" class="btn" style="padding: 0px" data-toggle="kt-tooltip" data-placement="top" title="Detail" aria-hidden="true">' +
                                    '<div class="symbol symbol-60 symbol-2by3 flex-shrink-0 mr-1">' +
                                        '<img id="imageResource" src="../../assets/media/app/voting-luwu.jpeg" style="object-fit: cover;" alt="photo">' +
                                    '</div>' +
                                '</a>' +
                            '</div>' +
                   	 	'</div>'

			var subdistrict = $('#form-data select[name="subdistrictId"] option:selected').val();
			var ward = $('#form-data select[name="wardId"] option:selected').val();
			var tps = $('#form-data select[name="tpsId"] option:selected').val();

			var createdBy = "Admin";
			var createdDate = pDateTime;
			var status = '<span class="label label-lg font-weight-bold label-light-success label-inline">ACTIVE</span>'

			$('#modal-data').modal('hide');

		    table.row.add([tps, photo, subdistrict, ward, voting, status, createdDate, createdBy,  ""]).draw();

		    swal.fire({
                position: 'top-right',
                type: 'info',
                title: 'Information',
                text: 'Data berhasil diinput',
                showConfirmButton: false,
                timer: 1500
            });

		});

		function imageModal() {
		    //$('#pop').on("click", function(e) {
		    $('#imagePreview').attr('src', $('#imageResource').attr('src'));
		    $('#imageModal').modal({
		        backdrop: 'static',
		        keyboard: true,
		        show: true
		    });
		    //});
		}

		// $('input[type=file]').on('change', function(e) {
		// 	e.preventDefault();

		// 	var nik = ''
		// 	var name = ''
		// 	var gender = ''
		// 	var religion = ''
		// 	var marital = ''
		// 	var nationality = ''


		// 	// console.log(fileSelector)


		// 	// var rec = new Tesseract.TesseractWorker();
		// 	// // rec.recognize(fileSelector.files[0])
		// 	// // 	.progress(function (response) {
		// 	// // 		console.log(response)
		// 	// // 	})
		// 	// // 	.then(function (data) {
		// 	// // 		console.log(data)
		// 	// // 	})

		// 	// const { data: { text } } = await worker.recognize(fileSelector.files[0]);
		// 	// console.log(data)

		// 	const { createWorker } = Tesseract;

		// 	(async () => {
		// 	  const worker = await createWorker("ind", 1, {
		// 	  	logger: m => console.log(m),
		// 	  });
		// 	  const { data: { lines } } = await worker.recognize(fileSelector.files[0], {
		// 	  	rotateAuto: true
		// 	  }, {imageColor: true, imageGrey: true, imageBinary: true});
		// 	  // const data = await worker.recognize(fileSelector.files[0]);
		// 	  console.log(lines)

		// 	  // #nik
		// 	  document.getElementById("ktp").setAttribute('value', lines[2].words[2].text)
		// 	  console.log(lines[2].words[2].text);

		// 	  // name
		// 	  var result = '';
		// 	  for(var i=2; i<lines[3].words.length; i++) {
		// 	  	result += lines[3].words[i].text + ' '
		// 	  }
		// 	  console.log(result)
		// 	  document.getElementById("name").setAttribute('value', result)

		// 	  // gender
		// 	  console.log(lines[5].words[3].text)
		// 	  $("#genderId").val(lines[5].words[3].text).trigger('change');

		// 	  // religion
		// 	  console.log(lines[10].words[2].text)
		// 	  $("#religionId").val(lines[10].words[2].text).trigger('change');

		// 	  await worker.terminate();
		// 	})();
		// });

	}
}	