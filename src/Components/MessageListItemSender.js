import "./MessageListItemSender.sass"

import React from "react"

class MessageListItemSender extends React.Component {
	render() {
		const url = "https://fakeimg.pl/2000x2000/?text=Photo&font=lobster%22"

		return (
			<div className="Message-List-Item-Sender">
				<div className="Bubbles">
					<p>
						dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem
						Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
						oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
						beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz
						yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek
						değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum
						pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın
						zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü
						yayıncılık yazılımları ile popüler olmuştur.
					</p>
				</div>
				<div className="Photo">
					<img src={url} alt="" />
				</div>
			</div>
		)
	}
}

export default MessageListItemSender
