
import './headerStyles.css'

export default function Headers(){

    return (
        <>
        <header className="header">
            <div className="header-left">
                <a href="#" className="header-logo">Lightnium</a>
            </div>
            <nav className="header-nav">
                <a href="#">Home </a>
                <a href="#">Shop</a>
                <a href="#">About</a>
                <a href='#'>Contact</a>
            </nav>
            <div className="header-right">
                <a href="#">
                    <img className='image' src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg'/>
                </a>
                <a href='#'>
                    <image className='image' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwAfAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQcEBQYIAv/EADEQAAIBBAECBAQEBwEAAAAAAAABAgMEBREGEiEHEzFRFCJBYRUygZEXIyQzcaHRFv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AvEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIl6MCQV/zLK8/tM06PGcNa3OO8uLjVnFSk5fVPc46/b9TD4JzfO3nK7jj3LbW3tbzyuulCnTcGpJJtP5pJ7i9rXswLMBCe0SAAAAAAAAAAAAAAAABGl7FP8AjbYXWLyWK5ZinKjXpPyKlWCW4yW3B9/s5rv7ouE0vMcLDkHG7/GT111qT8ptflqLvB/pJICtrKy8Vr6zoXlpnrGpb3FONWlPzYfNGS2n/a9mY+IXinmI3crLN2/9JdVLSqqkoRaqQepa/lvt9x4V/iuYx1zjVyi/xlXGTVP4SnSoyUYveu8ot9pKSff6I2/HMFlI5/kdhR5Zf2rpXVOtKcKNFuu6kE+t7j2e0120uwGptI+Kd5k77HUM3bO4sejzm5Q6fnW0k/L79vXsa/lOX8SOLfDLKZylKpdNqjStuicpa+3lr3SOl4jhMrfXnIbunyy/t5fik7eVWFGg3ceXCEet7j29u2l2NHx2zuOT+K8vjMlXylnhG2rivGC6nF6itRSX522vdRCrjwtO8o4m0pZOv597CjBV6ukuqevmel29TOIS0SEAAAAAAAAAAAIl6EnzUTcH0vT+jA89+IXHsXQ8TFb3dyrfHZKoqtarScW7ec99W0/T5kpd/pJ+xsf4c8EaS/8AbQ17ebQ/4cdkcHk1lLzG3WJv62drXnVGqtuM4ve3rWmm9Pq3pfYuCz8H+MfCUfi6N1K48uPmuFzJJz130vbewORfhzwRtN83g2vR+bQ7f6LD8OuN4bjuOr/gmR/EYXFVSncdUJeiSUfl7aXd/qV94l+G9pg8bbX3HLK7q04VGruKqSqSUNdml7b9f8oz/BGxu45nL5C2tLm0wtaCjSp1231z6k1p6XVqO9vX1/YLjAAAAAAAAAAAAAAABGu5IAEMkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z'/></a>
                <a href="#"><image className='image' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACOCAMAAADQI8A6AAAAflBMVEX///8hJikAAAAeIyb8/PwgJyn+/vwVGx+oqqsQFxsKEhYADRIbIiUZHyL19vYcISUAAAeQkpPi4+OytLUABgw9QELp6uo0ODtBRUcqLzLExsbv8PBlaWqeoKK4urvW2Nl2eXpWWFlOT1FdYGJvb3DNzs9/gIAAEREEFRkZIiHlbZDwAAADYElEQVR4nO2Y646bMBCFfeNiG3MnhJCESxLaff8X7BjSartdaKWmRqrm+7FKIJLPnhnPjE0IgiAIgiAIgiAIgiAIgiAIgiAIgvwlvrB/80eYZZdrF8+P/P3UEBKf+oaxVCvNmBzCnBAhdtMTF8dARfQJl2XdH3YTQx4jM5xSL4qMMZGVFekki/cRIzIdgIJEB9V4uw1VU9qvvBw6skf+9KW1g3nZ49AKER+6cGBWkKo792LiM/Mo12Px/mF3t5lk9MO5nKm0cZogUd7vJHH1wKCgyh3HK2SQJmq25ueNnQ+SUnl0KobkDaeetGo+lBlB2iP4wy7utEAc7np9ydxLqNfkzuqhTx4GAnL/fDlBTpDkuieuqrNPJgXm5GsLinNAOY+d6Yk1p2paf999AfNCR2IIRAOK3WP9vxejobJ31kqzkpqxXX0tyCWlvIld6bkFnsrWXwvSgX3MVatox4iyzdSwZYmdHMk5VNzbXqwdE8qKrV+8kLwGOZuhiG/mN/69Ws5m044Hh+60x8TbXgzCSdnVkRwxGFpu9sgcuvq2f6+kV9SsdKwFWye/rBemFwPDDq/z1dfC9jQzOhvhc2jZsHHE2sTXepzKjTr5WnwCPcnUYvXAeVHbPe3Vcgo7YKzWlZZGEKuPU+s/Q5D4aGjUrFRC0cOouDV/vB47uUtI1l8GUB/auT1/UXW3O8tVU++l56lPh4wLW07sSofu5LTem0fV8Otuz6Q9Gc83CKmz+wNBHnBeoAG7xMvX5yZ7HO35S3L9NOhKnJz/IAgnbuzJrw7zZ0T89nSW8Izq6TBpvgi6r1fLl8oBfxLrQZSacxaeTtdLX6cSRHCWgSGFVLOer42rKYy0vbZm8EDqNC1VMBui66V1xv1yD8XZ2WaQizOgKKp0EfEkUiyb0xdWF8VbsASssqOGmz1WnBlTJqE8MTJl1SJm9sK3dy72bowadj84K9GHYhqOdV2N97D7UIf8K10M+lq5msXmZUXbfpYcPslng+wl2eRq/BErn5c75muj5rqo3G2xDXzSPQ0yatrvxvk7VkHYLDVI09PuggQkVX7TidVTnneXQ+YSHlLorJF00jH+hPymuAydDRzbgIo4ZLe9ZfzAVqXcWWlGEARBEARBEARBEARBEARBEARB/kO+AbRCJ8/CJCOsAAAAAElFTkSuQmCC'/></a>
            </div>
        </header>
        
        
        </>


    )

}