import React from 'react'
import './RightSection.css'
import { ArrowIcon, GearIcon, InfoIcon, WriteIcon, PlusIcon } from '../Components/Icons'
import { Header, Collapse, CollapseItem } from './../Components'


class RightSection extends React.Component {
  render() {
    return (
      <div className="Right-Section">

        <div className="Header-Container">
          <Header title="Tony Stark" subTitle="3 dakika önce aktifti" rightIcons={[<GearIcon />, <GearIcon />, <GearIcon />]} />
        </div>

        {/* Right Section */}
        <Collapse title="Seçenekler">
          <CollapseItem icon={<GearIcon />} title="Konusmada Ara" />
          <CollapseItem icon={<InfoIcon />} title="Takma adları düzenle" />
          <CollapseItem icon={<WriteIcon />} title="Rengi değiştir" />
          <CollapseItem icon={<PlusIcon />} title="İfade simgesini değiştir" />
        </Collapse>

      </div>
    )
  }
}

export default RightSection