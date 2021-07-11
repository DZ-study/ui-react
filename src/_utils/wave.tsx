import { useRef, useEffect, cloneElement, useState, useContext } from 'react';
import { supportRef, composeRef } from 'rc-util/lib/ref';
import { ConfigContext } from '../config-provider';
import { updateCSS } from 'rc-util/lib/Dom/dynamicCSS';
// import '../styles/animation/index.scss'

export interface WaveProps {
  children: React.ReactElement;
}

type InstanceType = { cancel?(): void };

const Wave: React.FC<WaveProps> = ({ children }) => {
  let instance = useRef<InstanceType>();
  let containerRef: any = useRef<HTMLDivElement>();
  // const [extraNode, setExtraNode] = useState<HTMLDivElement>()
  const [animationStart, setAnimationStart] = useState<boolean>(false);
  const [stylePseudo, setStylePseudo] = useState<HTMLStyleElement | null>();

  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('');

  useEffect(() => {
    const node = containerRef.current as HTMLDivElement;
    instance.current = bindAnimationEvent(node);

    return () => {
      if (instance.current?.cancel) {
        instance.current?.cancel();
      }
    };
  }, []);

  const resetEffect = (node: HTMLDivElement) => {
    const innerNodes = node.getElementsByClassName(
      `${prefixCls}-click-animating-node`,
    );

    // 清除动画添加的dom
    if (innerNodes[0]) {
      node.removeChild(innerNodes[0]);
    }
    setStylePseudo(null);
  };

  const handleClick = (node: HTMLDivElement, waveColor: string) => {
    if (!node) {
      return;
    }
    const extraNode = document.createElement('div');
    extraNode.setAttribute('class', `${prefixCls}-click-animating-node`);
    extraNode.style.borderColor = waveColor;

    const nodeRoot = node.getRootNode() || node.ownerDocument;
    const nodeBody: any =
      nodeRoot instanceof Document
        ? nodeRoot.body
        : nodeRoot.firstChild ?? nodeRoot;

    setStylePseudo(
      updateCSS(
        `.${prefixCls}-click-animating-node {
    --ui-wave-shadow-color: ${waveColor};
    }`,
        'ui-wave',
        {
          attachTo: nodeBody,
        },
      ),
    );

    // setExtraNode(extraNode)

    // TODO: 替换成伪类
    node.appendChild(extraNode);
    (['transition', 'animation'] as string[]).forEach((name: string) => {
      node.addEventListener(`${name}start`, onTransitionStart);
      node.addEventListener(`${name}end`, onTransitionEnd);
    });
  };

  const onTransitionStart = () => {
    setAnimationStart(true);
  };

  const onTransitionEnd = () => {
    setAnimationStart(false);
  };

  const bindAnimationEvent = (node: HTMLDivElement) => {
    if (
      !node ||
      !node.getAttribute ||
      node.getAttribute('disabled') ||
      node.className.indexOf('disabled') >= 0
    ) {
      return;
    }

    const onClick = (e: MouseEvent) => {
      resetEffect(node);
      const computedStyle = getComputedStyle(node);
      const waveColor = computedStyle.getPropertyValue('background-color');
      handleClick(node, waveColor);
    };
    node.addEventListener('click', onClick, true);
    return {
      cancel: () => {
        node.removeEventListener('click', onClick, true);
      },
    };
  };

  const renderWave = () => {
    let ref = containerRef;
    if (supportRef(children)) {
      // 所以，先合并ref
      ref = composeRef((children as any).ref, containerRef as any);
    }
    // 生成新的元素，合并props，key和ref会被保留
    return cloneElement(children, { ref });
  };

  return <>{renderWave()}</>;
};

export default Wave;
