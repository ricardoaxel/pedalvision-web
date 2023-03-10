// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import { Style } from "../PBElement.css"
import Draggable from "react-draggable"
import { FiRotateCcw, FiRotateCw } from "react-icons/fi"
import {
  AiOutlineClose,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai"
import { useState, useEffect } from "react"

export const DraggableDrag = ({
  id,
  left,
  top,
  otherData,
  elementTypeInfo,
  scale,
  showTransitions,
  setShowTransitions,
  rotatePBElement,
  deletePBElement,
  updateElementLayer,
  setActualElement,
  handleEvent,
}: any) => {
  const [jumping, setJumping] = useState(false)

  useEffect(() => {
    if (jumping) {
      setTimeout(() => setJumping(false), 150)
    }
  }, [jumping])

  return (
    <Draggable
      position={{
        x: left,
        y: top,
      }}
      key={id}
      bounds="parent"
      onStop={(e: any, data: any) =>
        handleEvent(id, data.lastX, data.lastY, elementTypeInfo)
      }
      onStart={() => setShowTransitions(false)}
      // onDrag={() => setShowTransitions(false)}
      draggable="false"
    >
      <div
        css={Style(
          elementTypeInfo.Width,
          elementTypeInfo.Height,
          scale,
          showTransitions,
          otherData,
          false,
          jumping
        )}
        draggable="false"
        onClick={() => {
          setActualElement({
            id: id,
            particularInfo: otherData,
            elTypeInfo: elementTypeInfo,
          })
          setShowTransitions(true)
        }}
        role="presentation"
      >
        <img
          className={"elementImage"}
          src={require(`../../../assets/Images/${otherData.type}/${elementTypeInfo.Image}`)}
          //To avoid the default HTML5 drag API
          draggable="false"
          alt=""
        />

        <div className="borderSquare" draggable="false">
          <div className={`options `}>
            <p
              onClick={() => rotatePBElement(id, -90)}
              data-tip="Rotate left"
              role="presentation"
            >
              <FiRotateCcw size={9} />
            </p>
            <p
              onClick={() => deletePBElement(id)}
              data-tip="Delete"
              role="presentation"
            >
              <AiOutlineClose size={12} />
            </p>
            <p onClick={() => rotatePBElement(id, 90)} role="presentation">
              <FiRotateCw size={9} data-tip="Rotate right" />
            </p>
          </div>
        </div>
        <div className={`layer `} draggable="false">
          <p
            onClick={() => {
              setJumping(true)
              updateElementLayer(id, 1)
            }}
            role="presentation"
          >
            <AiOutlineArrowUp data-tip="Move up" />
          </p>
          <p className="special" data-tip="Actual layer">
            {otherData.layer}
          </p>
          <p
            onClick={() => {
              setJumping(true)
              updateElementLayer(id, -1)
            }}
            role="presentation"
          >
            <AiOutlineArrowDown data-tip="Move down" />
          </p>
        </div>
      </div>
    </Draggable>
  )
}
