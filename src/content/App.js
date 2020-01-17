import React, {Component} from 'react';


  class App extends Component{
    render(){
      return(
            <div className="wrapper">
            	<div className="header">
            		<div className="navbar">
            			<div className="logo">
            				<img className="imgfluid" src={require('../images/babastudio-logo.png')}/>
            			</div>
            			<div className="menu">
							<ul>
								<li><a>Home</a></li>
								<li><a>Blogs</a></li>
								<li><a>Galery</a></li>
								<li><a>Kontak</a></li>
							</ul>
						</div>
            		</div>
            	</div>
					<div className="slider">
						<div className="slidercontent">
							<img className="imageslider" src={require('../images/banner-desktop.jpg')}/>
						</div>
					</div>
				<h2 className="dataprestasi">Prestasi Murid babastudio</h2>
				<div className="content">

					<div className="content-gambar">
						<div className="image">
							<img className="imagesliderr" src={require('../images/21cineplex.jpg')}/>
							<div className="contentimage">
								<h2 className="fontimage"> www.21cineplex</h2>
							</div>
						</div>
						<div className="image">
							<img className="imagesliderr" src={require('../images/bpn.jpg')}/>
							<div className="contentimage">
								<h2 className="fontimage"> www.bpn.go.id</h2>
							</div>
						</div>
						<div className="image">
							<img className="imagesliderr" src={require('../images/republika.jpg')}/>
							<div className="contentimage">
								<h2 className="fontimage"> www.republika.co.id</h2>
							</div>
						</div>

					</div>
					<div className="content-gambar">
						<h2 className="dataprestasi">Tempat Khursus Babastudio</h2>
						<div className="content-youtube">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/OnfYLBNvrPw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>						
						</div>
						<div className="content-map">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.325220794991!2d106.78307099999999!3d-6.220776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6cd0000003d%3A0x1f5fa010fece9b0b!2sKampus%20Babastudio%20Permata%20Hijau!5e0!3m2!1sid!2sid!4v1575681845781!5m2!1sid!2sid" width="550" height="315" frameBorder="0" allowFullScreen=""></iframe>
						</div>
					</div>
				</div>
			</div>
        	
        	)
  }

}
export default App;
