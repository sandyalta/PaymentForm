

new Vue ({
	el: '#app',
	data: {
		name: localStorage.getItem('name'),
		noHP: localStorage.getItem('noHP'),
		address: "",//localStorage.getItem('address')== ''?'aa':localStorage.getItem('address'),
		checkSend: localStorage.getItem('checkSend')== ''?false:Boolean(localStorage.getItem('flagName')),
		dropName: localStorage.getItem('dropName'),
		dropHP: localStorage.getItem('dropHP'),
		flagName: localStorage.getItem('flagName') == ''?0:parseInt(localStorage.getItem('flagName')),
		flagHP: localStorage.getItem('flagHP') == ''?0:parseInt(localStorage.getItem('flagHP')) ,
		flagAddress: localStorage.getItem('flagAddress') == ''?0:parseInt(localStorage.getItem('flagAddress')),
		flagDropName: localStorage.getItem('flagDropName') == ''?0:parseInt(localStorage.getItem('flagDropName')),
		flagDropHP: localStorage.getItem('flagDropHP') == ''?0:parseInt(localStorage.getItem('flagDropHP')),
		flagShipment: localStorage.getItem('flagShipment') == ''?0:parseInt(localStorage.getItem('flagShipment')),
		flagPayment: localStorage.getItem('flagPayment') == ''?0:parseInt(localStorage.getItem('flagPayment')),
		feeDropShipping: localStorage.getItem('feeDropShipping') == ''?false:Boolean(localStorage.getItem('flagName')),
		total: localStorage.getItem('total') == ''?500000:parseInt(localStorage.getItem('total')),
		feeShipment: localStorage.getItem('feeShipment') == ''?false:Boolean(localStorage.getItem('feeShipment')),
		shipmentName: localStorage.getItem('shipmentName'),
		shipmentFee: localStorage.getItem('shipmentFee'),
		shipmentDate: localStorage.getItem('shipmentDate'),
		paymentName:localStorage.getItem('paymentName')
	},

	computed:{
		className: function(){
			return {
				orange: this.flagName == 1,
				green: this.flagName == 2
			}
		},
		classHP: function(){
			return {
				orange: this.flagHP == 1,
				green: this.flagHP == 2
			}
		},
		classAddress: function(){
			return {
				orange: this.flagAddress == 1,
				green: this.flagAddress == 2
			}
		},
		classDropName: function(){
			return {
				orange: this.flagDropName == 1,
				green: this.flagDropName == 2
			}
		},

		classDropHP: function(){
			return{
				orange: this.flagDropHP == 1,
				green: this.flagDropHP == 2
			}
		},

		goSendColor: function(){
			return{
				green: this.flagShipment == 1
			}
		},	
		jneColor: function(){
			return{
				green: this.flagShipment == 2
			}
		},
		soloColor: function(){
			return{
				green: this.flagShipment == 3
			}
		},
		eWalletColor: function(){
			return{
				green: this.flagPayment == 1
			}
		},
		bankColor: function(){
			return{
				green: this.flagPayment == 2
			}
		},
		virtualColor: function(){
			return{
				green: this.flagPayment == 3
			}
		},

		randomID: function(){
			var text = "";
			var pos = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
			for (var i=0; i < 5 ; i++)
			{
				text+= pos.charAt(Math.floor(Math.random()*pos.length));
			}
			return text;
		}
	},
	methods:{
		checkHP: function(noHP){
			for(var i=0; i< noHP.length ; i++)
			{
				if (noHP.charAt(i) == '+' || noHP.charAt(i) == '-' || noHP.charAt(i) == '(' || noHP.charAt(i) == ')')
				{
					continue;
				}
				
				if (!isNaN(noHP.charAt(i)))
				{
					continue;
				}
				return false;
			}
			return true;
		},

		nameValidation: function(){
			if(this.name == '')
			{
				this.flagName = 1;
			}
			else{
				this.flagName = 2;
			}
		},

		hpValidation: function(){
			if(this.noHP == '')
			{
				this.flagHP = 1;
			}
			else if (!this.checkHP(this.noHP))
			{
			 	this.flagHP = 1;
			}
			else{
				this.flagHP = 2;
			}
		},

		addressValidation: function(){
			if(this.address == '')
			{
				this.flagAddress = 1;
			}
			else if(this.address.length > 120)
			{
				this.flagAddress = 1;
			}
			else{
				this.flagAddress = 2;
			}
		},

		dropNameValidation: function(){
			if(this.dropName == '')
			{
				this.flagDropName = 1;
			}
			else{
				this.flagDropName = 2;
			}
		},

		dropHPValidation: function(){
			if(this.dropHP == '')
			{
				this.flagDropHP = 1;
			}
			else if (!this.checkHP(this.dropHP))
			{
			 	this.flagDropHP = 1;
			}
			else{
				this.flagDropHP = 2;
			}
		},

		checkboxValidation: function(){
			if(!this.checkSend){
				dropName.disabled = false;
				dropHP.disabled = false;
				this.feeDropShipping = true;
				this.total = 505900;
				localStorage.setItem("feeDropShipping",true);
				localStorage.setItem("total",505900);
			}
			else{
				dropName.disabled = true;
				dropHP.disabled = true;
				this.dropName ='';
				this.dropHP = '';
				this.flagDropName = 0;
				this.flagDropHP = 0;
				this.feeDropShipping = false;
				this.total = 500000;
				localStorage.setItem("dropName","");
				localStorage.setItem("dropHP", "");
				localStorage.setItem("flagDropName",0);
				localStorage.setItem("flagDropHP",0);
				localStorage.setItem("feeDropShipping",false);
				localStorage.setItem("total",500000);
			}
		},

		checkGOShipment: function(){
			if(this.flagShipment!=1)
			{
				this.total += 15000;
				localStorage.setItem("total", this.total);
			}
			this.flagShipment = 1;
			this.feeShipment = true;
			this.shipmentName = "GO-Send";
			this.shipmentFee = 15000;
			this.shipmentDate = "Today by GO-Send"
			localStorage.setItem("shipmentName", "GO-Send");
			localStorage.setItem("flagShipment", 1);
			localStorage.setItem("feeShipment", true);
			localStorage.setItem("shipmentFee", 15000);
			localStorage.setItem("shipmentDate", "Today by Go-Send")
		},

		checkJNEShipment: function(){
			if(this.flagShipment!=1)
			{
				this.total += 9000;
			}
			this.flagShipment = 2;
			this.feeShipment = true;
			this.shipmentName = "JNE";
			this.shipmentFee = 9000;
			this.shipmentDate = "2 days by JNE"
			localStorage.setItem("shipmentName", "JNE");
			localStorage.setItem("flagShipment", 2);
			localStorage.setItem("feeShipment", true);
			localStorage.setItem("shipmentFee", 9000);
			localStorage.setItem("shipmentDate", "2 days by JNE")
		},

		checkSoloShipment: function(){
			if(this.flagShipment!=1)
			{
				this.total += 29000;
			}
			this.flagShipment = 3;
			this.feeShipment = true;
			this.shipmentName = "Personal Courier";
			this.shipmentFee = 29000;
			this.shipmentDate = "1 day by Personal Courier"
			localStorage.setItem("shipmentName", "Personal Courier");
			localStorage.setItem("flagShipment", 3);
			localStorage.setItem("feeShipment", true);
			localStorage.setItem("shipmentFee", 29000);
			localStorage.setItem("shipmentDate", "1 day by Personal Courier")
		},

		payWith: function(payment, flagPayment){
			this.paymentName = payment;
			this.flagPayment = flagPayment;
		},


	
	}
});